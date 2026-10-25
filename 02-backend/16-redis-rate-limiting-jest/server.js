import "dotenv/config.js";
import morgan from "morgan";
import express from "express";
import mongoose from "mongoose";
import Redis from "ioredis";
import userModel from "./models/user.model.js";
import rateLimit from "express-rate-limit";

// Express app initialization
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// rate limiting
const globalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 10, // 10 requests per window per IP
  message: {
    error: "Too many requests. Please try again later.",
  },
  statusCode: 429,
  standardHeaders: true, // sends RateLimit-* headers
  legacyHeaders: false,
});

// Apply to every route
app.use(globalLimiter);

// MongoDB connections
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongo db");
  })
  .catch((error) => {
    console.log("failed to connect with mongodb");
  });

// Redis connection
const redis = new Redis(process.env.REDIS_URI);
redis.once("ready", () => {
  console.log("Connected to Redis");
});

// routes
app.get("/api/users", async (req, res) => {
  try {
    const users = await userModel.find();
    return res.status(200).json({
      message: "User fetched successfully",
      success: true,
      status: "OK",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to fetch users",
      success: false,
      status: "ERROR",
    });
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    const cachedUser = await redis.get(`user:${req.params.id}`);
    if (cachedUser === "NULL") {
      return res.status(200).json(null);
    }
    if (cachedUser) {
      console.log("cache data");
      return res.status(200).json({
        message: "User fetched successfully",
        success: true,
        status: "OK",
        data: JSON.parse(cachedUser),
      });
    }
    console.log("database call");
    const user = await userModel.findById(req.params.id);
    // negative caching
    if (!user) {
      await redis.set(`user:${req.params.id}`, "NULL", "EX", 300);
      return res.status(200).json(null);
    }
    await redis.set(`user:${req.params.id}`, JSON.stringify(user), "EX", 3600); // cache for 1 hour
    return res.status(200).json({
      message: "User fetched successfully",
      success: true,
      status: "OK",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to fetch user",
      success: false,
      status: "ERROR",
    });
  }
});

app.post("/api/users/", async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    return res.status(201).json({
      message: "User created successfully",
      success: true,
      status: "CREATED",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to create user",
      success: false,
      status: "ERROR",
    });
  }
});

app.get("/", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 100; i++) {
    sum += i;
  }
  console.log(sum);

  return res.status(200).json({
    message: "Calculator",
    data: sum,
  });
});

app.listen(process.env.PORT, () => {
  console.log("server is running on port 3000");
});

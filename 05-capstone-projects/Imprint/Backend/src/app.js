const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth.routes.js");

const app = express();

// middlewares
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || `http://localhost:5173`,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true,
  }),
);

// routes
app.use("/api/v1/auth", authRouter);

module.exports = app;

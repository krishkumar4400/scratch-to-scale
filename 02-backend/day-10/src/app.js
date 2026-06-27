import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { router as indexRouter } from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "UP" });
});

// API routes
app.use("/api/v1", indexRouter);

// Error handling
app.use(errorHandler);

export { app };

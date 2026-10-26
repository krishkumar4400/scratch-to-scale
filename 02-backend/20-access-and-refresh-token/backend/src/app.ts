import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

export default app;

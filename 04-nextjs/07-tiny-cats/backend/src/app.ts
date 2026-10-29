import express from "express";
import catRouter from "./routes/cat.routes.js";

const app = express();

app.use(express.json());

app.use("/api/cats", catRouter);

export default app;

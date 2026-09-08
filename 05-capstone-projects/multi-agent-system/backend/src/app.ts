import express from "express";
import morgan from "morgan";
import runGraph from "../ai/graph.ai.js";

// middlewares
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.get("/graph", async(req,res) => {
    const result = await runGraph("What is the capital of France?");
    res.json({result});
});

export default app;

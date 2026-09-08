import express from 'express';
import morgan from 'morgan';
import useGraph from './services/graph.ai.service.js';

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("hello express");
});

app.post("/use-graph", async (req,res) => {
    await useGraph("what is the capital of France ?");
});

export default app;

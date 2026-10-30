import express from "express";
import catRouter from "./routes/cat.routes.js";
import aiRouter from "./routes/ai.routes.js";
import recommendRouter from "./routes/recommend.routes.js";
import mcpRouter from "./routes/test-mcp.routes.js";

const app = express();

app.use(express.json());

app.use("/api/cats", catRouter);
app.use("/api/cat", aiRouter);
app.use("/api/ai", recommendRouter);
app.use("/api/mcp", mcpRouter);

export default app;

import express from "express";
import morgan from "morgan";

// middlewares
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello Express");
});

export default app;

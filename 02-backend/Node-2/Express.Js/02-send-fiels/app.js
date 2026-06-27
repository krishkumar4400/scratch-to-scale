import express from "express";
import { PORT } from "./env.js";
import path from 'path';

const app = express();

app.use(express.static(path.join(path.resolve(),"public")));

console.log("resolve = ", path.resolve());
console.log("dirname = ", import.meta.dirname);
console.log("filename = ", import.meta.filename);

const __filename = new URL(import.meta.url);
console.log(__filename);

const pathname = __filename.pathname;
console.log("pathname = ", pathname);


app.get("/", (req, res) => {
  res.send("Hello Express");
});

const pageFilePath = path.join(import.meta.dirname, "public", "index.html");

app.get('/page', (req,res) => {
    res.sendFile(pageFilePath);
});

const port = PORT || 4002;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

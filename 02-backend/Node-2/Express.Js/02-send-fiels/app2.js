import express from "express";
import path from 'path';

const app = express();

//by relative path 
// app.use(express.static("public"));

//by absolute path
const staticPath = path.join(import.meta.dirname, "public");
// app.use(express.static(staticPath));
app.use("/public-page",express.static(staticPath));


const port = 3001;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
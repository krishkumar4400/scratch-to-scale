// validating environment variables using ZOD library:

// 1. Manual way 
import { PORT } from "./env.js";

import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send("Hello Express"); 
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
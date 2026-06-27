import express from "express";
import router from "./Routes/router.js";

const app = express();

app.use('/app', router);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is Running om http://localhost:${port}`); 
});
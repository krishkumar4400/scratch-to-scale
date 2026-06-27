import express from 'express';
import router from './Router/routes.js';

const app = express();

// express router
app.use("/user", router);

const port = 3000;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`); 
});
import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send("Hello Express");
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`); 
});
import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send("<h1>Hello Express</h1>"); 
});

app.get("/about", (req,res) => {
    res.send("<h1>Welcome to About Page</h1>")
});

app.get('/contact', (req,res) => {
    res.send("<h1>Welcome to contact Page</h1>");
});

const port = 3000;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
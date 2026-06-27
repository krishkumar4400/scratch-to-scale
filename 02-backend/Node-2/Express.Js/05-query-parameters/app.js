import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send("Hello Express");
});

app.get('/print-reqQuery', (req,res) => {
  console.log(req.query);
  res.send("Hello Express query"); //[Object: null prototype] {}
});

app.get('/shop/search', (req,res) => {
    const {item,quantity} = req.query;
    console.log(req.query);
    console.log({ item, quantity });
    res.send("Hello Express"); 
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
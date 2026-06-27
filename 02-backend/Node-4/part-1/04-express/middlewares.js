import express from 'express';

const app = express();

// middleware:
const myFirstMiddleware = (req,res,next) => {
    console.log("This first middleware will run on every request"); 
    next();
}

const mySecondMiddleware = (req, res, next) => {
  console.log("This second middleware will run on every request");
//   res.send("rxdcfgvhb")
  next();
};

app.use(mySecondMiddleware);
app.use(myFirstMiddleware);


app.get('/', (req,res) => {
    res.send("Hello Express"); 
});
app.get('/about', (req,res) => {
    res.send("Home Page"); 
});
app.get('/home', (req,res) => {
    res.send("About Page"); 
});

const port = 3000;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`); 
});
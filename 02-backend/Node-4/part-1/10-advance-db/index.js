import express from 'express';
import 'dotenv/config';
import connectDB from './configs/db.js';
import productRouter from './routes/product.js';

const app = express();

// middlewares
app.use(express.json());

await connectDB();

app.get('/', (req,res) => {
    res.send("Hello express"); 
});

app.use('/api/product', productRouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
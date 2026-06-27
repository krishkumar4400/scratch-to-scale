import express from 'express';
import 'dotenv/config';
import router from './routes/image.js';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.send("Hello Express"); 
});

// image route 
app.use('/api/image', router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
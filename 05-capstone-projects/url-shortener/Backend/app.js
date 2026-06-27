import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.get('/', (req,res) => {
    return res.send("Hello Express"); 
});

export default app;
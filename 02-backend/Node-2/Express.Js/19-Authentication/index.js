import express from 'express';
import { authRouter } from './Routes/auth.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.set("view engine", "ejs");

app.get('/', (req,res) => {
    res.send("Hello Express");
});

app.use('/api/user', authRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
});
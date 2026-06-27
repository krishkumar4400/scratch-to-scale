import express from 'express';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res) => {
    res.render('home');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
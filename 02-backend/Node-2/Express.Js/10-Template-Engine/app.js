import express from 'express';
import ejs, { name } from 'ejs';

const app = express();

app.set('view engine', 'ejs');
// app.set('views', './views'); // we can do this but by default the template engine is view folder so we can neglect it.


app.get('/', (req,res) => {
    res.send("Hello Express"); 
});

app.get('/page', (req,res) => { 
    res.render("index", {content: "welcome"});
});
app.get('/report', (req,res) => {
    res.render("report", {content: "<strong>This is a Bold Text</strong>"});
});
app.get('/student', (req,res) => {
    const student = [{
        name: "krish",
        roll: 164,
        subject: "TOC" 
    },
{
    name:"ankit",
    roll: 10,
    subject:"hindi"
},{
    name: "sami",
    roll: 11,
    subject: "english"
},{
    name: "raj",
    roll: 12,
    subject: "math"
},{
    name: "ashish",
    roll: 14,
    subject: "science"
}]
    res.render("report", {student});
});

app.get('/web-page', (req,res) => {
    res.render('page'); 
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});

import express from 'express';
import path from 'path';

const app = express();

// app.use(express.urlencoded());
app.use(express.urlencoded({extended:true}));

// using get method
// app.get('/contact', (req,res)=>{
//     console.log(req.query);
//     res.redirect("submitted");
// });

// app.get('/submitted', (req,res) => {
//     res.send("Form Successfully Submitted");
// });

// using post method 
app.post('/submit', (req,res) => {
    const {name,email} = req.body;
    console.log(req.body);
    console.log({
        name,
        email 
    });
    res.redirect("submitted");
});

app.get("/submitted", (req,res) => {
    res.send("Form submitted Successfully"); 
});;



app.use(express.static(path.join(import.meta.dirname,"public")));

const port = 3003;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
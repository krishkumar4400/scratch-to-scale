import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req,res) => {
    res.send("Hello Express"); 
});
app.get('/about', (req,res) => {
    res.send("Welcome to About Page"); 
});

// Handling unmatched route or page not found
// app.use((req,res) => {
//     return res.status(404).send("Page Not Found");
// });
app.use((req,res) => {
    return res.status(404).sendFile(path.join(import.meta.dirname, "views", "404.html"));
});

const port = 3004;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});
const express = require('express');

const app = express(); // server create ho jata hai
app.use(express.json());

const notes = [];

// API Method | API Name
// POST /notes
app.post('/notes', (req,res) => {
    console.log(req.body);
    notes.push(req.body);
    console.log(notes);
    res.send("Notes created");
});

// GET /notes
app.get('/notes', (req,res) => {
    res.send(notes); 
});

// DELETE /notes/:index
// params - dynamic route
app.delete('/notes/:index', (req,res) => {
    // const index = parseInt(req.params.index);
    // notes.splice(index, 1);
    // console.log(notes)
    // res.send("Notes deleted");

    delete notes[req.params.index];
    res.send("Note deleted successfully");
});

// PATCH /notes/:index
// req.body = {description :- "sample modified description"} 
app.patch('/notes/:index', (req,res) => {
    const index = parseInt(req.params.index);
    const {description} = req.body;

    notes[index].description = description;
    res.send("Description updated successfully"); 
});;


module.exports = app;

/**

is file ka 2 kaam hota hai:
    1.server ko create karna 
    2. server ko config karna
 */
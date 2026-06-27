const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/notes", (req, res) => {
  res.status(200).json({ notes });
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).send("Notes created successfully");
});

app.delete("/notes/:index", (req, res) => {
  notes.pop(req.params.index);
  res.status(204).send("Notes deleted successfully");
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  res.status(200).send("Notes updates successfully");
});

module.exports = app;

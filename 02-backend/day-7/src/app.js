const express = require("express");
const noteModel = require("./models/notes.model.js");

const app = express();

// middlewares
app.use(express.json());

/**
 * POST /notes
 * req.body => {title, description}
 */
app.post("/notes", async (req, res) => {
  const { title, description, age } = req.body;

  const note = await noteModel.create({ title, description, age }); // age will be ignored
  console.log(note);
  return res.status(201).json({
    success: true,
    message: "Note created",
    note,
  });
});

/**
 * GET /notes
 *  - fetch all the notes data
 */
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  return res.status(200).json({
    success: true,
    notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;
  const data = await noteModel.findByIdAndDelete(id);
  console.log(data);
  return res.status(203).json({
    message: "Note deleted successfully",
    success: false,
    data
  });
});

app.patch("/notes/:id", async (req, res) => {
  const { description } = req.body;
  const { id } = req.params;

  const data = await noteModel.findByIdAndUpdate(id, {
    description,
  });
  console.log(data)

  return res.status(200).json({
    message: "Note Updated successfully",
    success: true,
    data
  });
});

module.exports = app;

const express = require("express");
const notesModel = require("./models/notes.model.js");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

/**
 * -POST /api/notes
 * -create new note and save data in mongodb
 * -req.body = {title, description}
 */
app.post("/api/notes", async (req, res) => {
  const note = await notesModel.create(req.body);
  return res.status(201).json({
    message: "Note created ",
    note,
    success: true
  });
});

/**
 * -GET /api/notes
 * -Fetch all note and return
 *
 */
app.get("/api/notes", async (req, res) => {
  const notes = await notesModel.find();
  return res.status(200).json({
    success: true,
    notes,
  });
});

/**
 * -DELETE /api/notes/:id
 * -Delete a note by id and return
 *
 */
app.delete("/api/notes/:id", async (req, res) => {
  const note = await notesModel.findByIdAndDelete(req.params.id);
  return res.status(203).json({
    message: "Note deleted successfully",
    success: true,
    note,
  });
});

/**
 * -PATCH /api/notes
 * -update the description of a note by id
 *
 */
app.patch("/api/notes/:id", async (req, res) => {
  const { description } = req.body;
  const { id } = req.params;
  const note = await notesModel.findByIdAndUpdate(id, { description });
  return res.status(200).json({
    message: "Note description updated",
    success: true,
    note,
  });
});

module.exports = app;

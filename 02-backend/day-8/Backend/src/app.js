const express = require("express");
const notesModel = require("./models/notes.model.js");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

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
    success: true,
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

// app.use('*name', (req,res) => { // wild card route
//   res.send("This is wild card");

// });


app.use("*name", (req, res) => {
  // wild card route
  console.log(path.join(__dirname, "..", "/public/index.html"));
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// npm run build

// 404 route
// app.use((req, res) => {
//   res.status(404).send("Page not found");
// });
module.exports = app;

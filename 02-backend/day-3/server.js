const express = require("express");

const app = express();
app.use(express.json());

const NOTES = [];

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.post("/api/notes", (req, res) => {
  const { title, description } = req.body;
  NOTES.push({ id: NOTES.length + 1, title, description });
  res.status(201).json({
    message: "Notes created",
    success: true,
  });
});

app.get("/api/notes", (req, res) => {
  res.json({
    success: true,
    data: NOTES,
  });
});

app.patch("/api/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  NOTES.find((note) => note.id === id);
});

app.delete("/api/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  NOTES.filter((note) => note.id !== id);

  return res.status(200).json({
    message: "Notes deleted",
    success: true,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// API
// An API (Application Programming Interface) is a set of rules and protocols that allow different software applications to communicate and interact with each other. It acts as a bridge between systems, enabling seamless data exchange and functionality sharing. For example, when you use a weather app, the app communicates with a weather service API to fetch and display the latest weather data.

// REST API
// The first rule in REST API is ki jab bhi software programs or applications or client and server ko communicate karna hoga to isme HTTP ya HTTPS protocol use ho raha hoga , and second rule is communication kis tarah ka kar rahe ho uske base par method decide hogi.

// req:-
// frontend se jitna bhi data aayega like name, password, email, file, image, pdf, audio, movie, etc backend me req ki help se access kar sakte hai

// res:-
// server se koi data ya response bhejna hai to res ka use karenge.

// express.json():-
// hamne jo express() server create kiya hai uske paas bydefault itni capability hoti nahi hai ki vo req.body ka data read kar sake because the data comes in the form of string entire object comes in the form of string. express.json is a middleware that runs on every request and convert the string into object.
// jab tak ham ye nahi likhte hamara server req.body ko nahi padh paayega.

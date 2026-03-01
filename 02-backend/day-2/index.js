const express = require("express");

const app = express(); // create server instance

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/home", (req, res) => {
  res.send("Hello Express");
});

app.listen(8000); // start the server

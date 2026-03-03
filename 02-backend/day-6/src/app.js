const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express");
});

module.exports = app;


// - server ko create karna 
// - server config karna

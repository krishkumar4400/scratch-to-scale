/**
 * Node Environment
 * Express
 *
 * Express is a library which maked development easier and write routes for it.
 *
 */

import express from "express";

const app = express();

app.use(express.json({limit: "16kb"})); // any data that comes up in json format we accept that.

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(8000, () => {
  console.log("Server is up and running");
});

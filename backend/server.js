const express = require("express");
const notes = require("./data/data");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  console.log("Api is running successfully");
  res.send("api is up");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/note/:id/", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  console.log(note);
  res.send(note);
  console.log("params id ", req.params);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`runnig on port ${PORT}`));

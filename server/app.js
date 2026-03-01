const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ShopeZ backend running");
});

module.exports = app;

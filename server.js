const express = require("express");
const path = require("path");
const port = 80;

const favicon = require("express-favicon");

const app = express();

app.use(favicon(__dirname + "/build/favicon.ico"));

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);
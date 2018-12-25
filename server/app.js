const express = require("express");
const path = require("path");
const app = express();

var events = require("./config/event");

app.use(express.static(path.join(__dirname, "..", "build")));

events.forEach(function(data) {
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
});

app.listen(process.env.PORT || 8000);

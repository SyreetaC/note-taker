const path = require("path");
const fs = require("fs");

//renders home page
const getIndexHtml = (req, res) => {
  filePath = path.join(__dirname, "../../public", "index.html");
  res.sendFile(filePath);
};

//renders notes page
const getNotesHtml = (req, res) => {
  filePath = path.join(__dirname, "../../public", "notes.html");
  res.sendFile(filePath);
};

module.exports = {
  getIndexHtml,
  getNotesHtml,
};

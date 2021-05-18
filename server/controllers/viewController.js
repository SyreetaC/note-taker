const path = require("path");

//renders home page
const getIndexHtml = (req, res) => {
  filePath = path.join(__dirname, "../../public", "index.html");
  res.sendFile(filePath);
  return filePath;
};
//try catch??

//renders notes page
const getNotesHtml = (req, res) => {
  filePath = path.join(__dirname, "../../public", "notes.html");
  res.sendFile(filePath);
  return filePath;
};

module.exports = {
  getIndexHtml,
  getNotesHtml,
};

const path = require("path");

//renders home page
const getIndexHtml = (req, res) => {
  const filePath = path.join(__dirname, "../../public", "index.html");
  console.log(filePath);
  res.sendFile(filePath);
};
//try catch??
//refactor later

//renders notes page
const getNotesHtml = (req, res) => {
  const filePath = path.join(__dirname, "../../public", "notes.html");
  console.log(filePath);
  res.sendFile(filePath);
};

module.exports = {
  getIndexHtml,
  getNotesHtml,
};

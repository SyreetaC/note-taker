const path = require("path");
const fs = require("fs");

const getIndexHtml = (req, res) => {
  filePath = path.join(__dirname, "../../public", "index.html");
  res.sendFile(filePath);
};

const getNotesHtml = (req, res) => {
  filePath = path.join(__dirname, "../../public", "notes.html");
  res.sendFile(filePath);
  //res is the response to the browser
  //send the notes.html file, using "sendFile"
  //use path.join and __dirname + whatever the path is
  // res.sendFile(filePath);
  // const filePath = path.join(__dirname, "../db/db.json");
  // const data = fs.readFileSync(filePath, "utf-8");
  // return data;
};

module.exports = {
  getIndexHtml,
  getNotesHtml,
};

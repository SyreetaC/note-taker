const path = require("path");
const fs = require("fs");

//all functions for note in here- e.g. CRUD operations
//getting notes from db

// const writeNote = (req, res) => {};

const getAllNotes = (req, res) => {
  //res.json because you don't want to send a file, but read one.
  const filePath = path.join(__dirname, "../db/db.json");
  const data = fs.readFileSync(filePath, "utf-8");
  res.json(JSON.parse(data));
};
const getOneNote = (req, res) => {
  //res.json because you don't want to send a file, but read one.
  res.send("getOneNote");
};

// const deleteNote = (req, res) => {};

module.exports = { getAllNotes, getOneNote };

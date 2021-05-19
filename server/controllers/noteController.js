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

const writeNote = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../db/db.json");
    fs.writeFileSync(filePath, "utf-8");
    return JSON.parse();
  } catch (err) {
    console.log(err);
  }
};

// const deleteNote = (req, res) => {};

module.exports = { getAllNotes, writeNote };

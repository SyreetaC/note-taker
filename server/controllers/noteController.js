const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { json } = require("express");

//all functions for note in here- e.g. CRUD operations
//getting notes from db

const getAllNotes = (req, res) => {
  //res.json because you don't want to send a file, but read one.
  const filePath = path.join(__dirname, "../db/db.json");
  const data = fs.readFileSync(filePath, "utf-8");
  res.json(JSON.parse(data));
};

const saveNote = (req, res) => {};

const writeNote = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../db/db.json");
    const notes = fs.readFileSync(filePath, "utf-8");
    const newNote = { ...req.body, id: uuidv4() };
    const data = [...JSON.parse(notes), newNote];
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

// const deleteNote = (req, res) => {};

module.exports = { getAllNotes, writeNote, saveNote };

const { v4: uuidv4 } = require("uuid");
const readFromDb = require("../db/readFromFile");
const writeToDb = require("../db/writeToFile");
//all functions for note in here- e.g. CRUD operations

//getting notes from db
const getAllNotes = (req, res) => {
  const notes = readFromDb();
  res.json(notes);
  return notes;
};

//function to write a new note
const writeNote = (req, res) => {
  const notes = readFromDb();
  const newNote = { ...req.body, id: uuidv4() };
  const data = [...notes, newNote];
  writeToDb(data);
  res.json(data);
};

//function to delete note based on the id
const deleteNote = (req, res) => {
  const existingNotes = readFromDb(req, res);
  const id = req.params.id;
  const noteForDeletion = existingNotes.filter((each) => {
    return each.id !== id;
  });
  writeToDb(noteForDeletion);
  res.json(noteForDeletion);
};

module.exports = { getAllNotes, writeNote, deleteNote };

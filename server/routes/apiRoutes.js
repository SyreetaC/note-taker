//a route to return a single requested note when clicked (from db)
//create route for reading existing notes from db

const { Router } = require("express");

const {
  getAllNotes,
  writeNote,
  deleteNote,
} = require("../controllers/noteController");

const router = Router();

//URL to read notes
router.get("/notes", getAllNotes);

//URL to write a note
router.post("/notes", writeNote);

//URL to delete note
router.delete("/notes/:id", deleteNote);

module.exports = router;

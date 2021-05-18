//a route to return a single requested note when clicked (from db)
//create route for reading existing notes from db

const { Router } = require("express");

const { getAllNotes, getOneNote } = require("../controllers/noteController");

const router = Router();

//the URL would need to be "/api/notes"
router.get("/notes", getAllNotes);

//the URL would need to be "/api/notes/123"
router.get("/notes/:id", getOneNote);

module.exports = router;

//a route to return a single requested note when clicked (from db)
//create route for reading existing notes from db

const { Router } = require("express");

const { getAllNotes } = require("../controllers/generateNotes");

const router = Router();

router.get("/notes", getAllNotes);

module.exports = router;

//how do I then use this route to get a single note?

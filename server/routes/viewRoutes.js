//sending html files

const { Router } = require("express");

const { getNotesHtml, getIndexHtml } = require("../controllers/viewController");

const router = Router();

//Ordering is important!!
//notes html page
//the URL would need to be "/notes"
router.get("/notes", getNotesHtml); //renders notes page.

//index html page
//the URL would need to be "/ANYTHING"
router.get("*", getIndexHtml); //renders home page

module.exports = router;

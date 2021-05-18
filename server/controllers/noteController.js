//all functions for note in here- e.g. CRUD operations

const getAllNotes = (req, res) => {
  res.send("getAllNotes");
};
const getOneNote = (req, res) => {
  res.send("getOneNote");
};

module.exports = { getAllNotes, getOneNote };

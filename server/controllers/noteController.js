//all functions for note in here- e.g. CRUD operations

// const writeNote = (req, res) => {};

const getAllNotes = (req, res) => {
  res.send("getAllNotes");
  // const filePath = path.join(__dirname, "../db/db.json");
  // const data = fs.readFileSync(filePath, "utf-8");
  // return data;
};
const getOneNote = (req, res) => {
  res.send("getOneNote");
};

// const deleteNote = (req, res) => {};

module.exports = { getAllNotes, getOneNote };

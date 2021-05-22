const path = require("path");
const fs = require("fs");

//function to get data from the database
const readFromDb = () => {
  const filePath = path.join(__dirname, "../db/db.json");
  const dbData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(dbData);
};

module.exports = readFromDb;

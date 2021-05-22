const path = require("path");
const fs = require("fs");

//function to write data to the database
const writeToDb = (data) => {
  const filePath = path.join(__dirname, "../db/db.json");
  fs.writeFileSync(filePath, JSON.stringify(data));
  return JSON.parse(data);
};

module.exports = writeToDb;

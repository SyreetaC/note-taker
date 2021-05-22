const path = require("path");
const fs = require("fs");

//function to write data to the database
const writeToDb = () => {
  const filePath = path.join(__dirname, "../db/db.json");
  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = writeToDb;

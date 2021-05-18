//sort middleware here
//create server

const express = require("express");
const cors = require("cors");

const viewRoutes = require("./routes/viewRoutes");
const apiRoutes = require("./routes/apiRoutes");

const PORT = 3000;

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Routing
app.use("/", viewRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

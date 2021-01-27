const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();

const routes = require("./routes")


const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));


app.use(bodyParser.json());

app.use("/", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


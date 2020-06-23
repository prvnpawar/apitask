"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConfig = require("./configs/dbConfig");
const indexRouter = require("./routes/index");
const db = require("./configs/dbConfig");

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use("/api", indexRouter);

const port = process.env.PORT || process.env.SERVER_PORT;

app.listen(port, function () {
  console.log(`The Server Has Started at http://localhost:${port}`);
});

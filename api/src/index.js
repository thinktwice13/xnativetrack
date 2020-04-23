const express = require("express");
const mongoose = require("mongoose");
const { dbuser, dbpassword, dbhost, dbport, dbname } = require("../keys.js");

const app = express();

const mongoUri = `mongodb://${dbuser}:${dbpassword}@${dbhost}:${dbport}/${dbname}`;

app.get("/", (req, res) => {
  res.send("Hi");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

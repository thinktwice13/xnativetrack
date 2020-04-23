const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const keys = require("../keys.js");
const { dbuser, dbpassword, dbhost, dbport, dbname } = keys;
require("./models/User");

const authRoutes = require("./routes/authRoutes.js");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = `mongodb://${dbuser}:${dbpassword}@${dbhost}:${dbport}/${dbname}`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB instance");
});
mongoose.connection.on("error", (error) => {
  console.log({ error });
});

app.get("/", (req, res) => {
  res.send("Hi");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

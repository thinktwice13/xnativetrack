import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import keys from "../keys.js";
const { dbuser, dbpassword, dbhost, dbport, dbname } = keys;

// require("./models/User");
// import User from "./models/User";
import User from "./models/User.js";
import authRoutes from "./routes/authRoutes.js";
import requireAuth from "./middleware/requireAuth.js";

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

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

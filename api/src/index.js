import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import keys from "../keys.js";
import User from "./models/User.js";
import Track from "./models/Track.js";
import routes from "./routes/index.js";
import requireAuth from "./middleware/requireAuth.js";
const { dbuser, dbpassword, dbhost, dbport, dbname } = keys;

const app = express();

app.use(bodyParser.json());

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

app.get("/tracks", requireAuth, routes.tracks.getAll);

app.post("/signup", routes.auth.signup);
app.post("/signin", routes.auth.signin);
app.post("/tracks", requireAuth, routes.tracks.add);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

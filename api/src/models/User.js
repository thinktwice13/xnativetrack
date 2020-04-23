const mongoose = require("mongoose");

ongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      tyoe: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  })
);

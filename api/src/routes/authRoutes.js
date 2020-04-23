const express = require("express");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("Signup request");
});

module.exports = router;

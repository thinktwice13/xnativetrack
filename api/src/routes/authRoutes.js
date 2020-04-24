import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });

  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

export default router;

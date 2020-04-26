import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const User = mongoose.model("User");

export const signup = async (req, res) => {
  const { email, password } = req.body;
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(422).send({ error: "Must provide email and password" });

  const user = await User.findOne({ email });

  // if no user found, try signup
  if (!user) {
    try {
      const user = new User({ email, password });
      await user.save();

      const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
      res.send({ token });
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid email or password" });
  }
};

import mongoose from "mongoose";
import requireAuth from "../middleware/requireAuth.js";

const Track = mongoose.model("Track");

export default {
  getAll: async (req, res) => {
    try {
      const tracks = await Track.find({ userId: req.user._id });
      res.send(tracks);
    } catch (err) {
      res.send({ err });
    }
  },
  add: async (req, res) => {
    console.log(req.body);

    const { _id: userId } = req.user;
    const { name, locations } = req.body; // get this from mobile phone

    if (!name || !locations)
      return res.status(422).send({ error: "Name and locations not provided" });

    try {
      const track = new Track({ name, locations, userId });
      await track.save();
      res.send("Track saved");
    } catch (error) {
      res.send(422).send({ error });
    }
  },
};

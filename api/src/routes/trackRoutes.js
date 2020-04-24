import mongoose from "mongoose";
import requireAuth from "../middleware/requireAuth.js";

const Track = mongoose.model("Track");

export default {
  getAll: async (req, res) => {
    console.log("Here!", { user: req.user });
    try {
      const tracks = await Track.find({ userId: req.user._id });
      res.send(tracks);
    } catch (err) {
      res.send({ err });
    }
  },
};

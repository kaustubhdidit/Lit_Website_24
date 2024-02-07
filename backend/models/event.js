import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Event = mongoose.models.posts || mongoose.model("Event", schema);
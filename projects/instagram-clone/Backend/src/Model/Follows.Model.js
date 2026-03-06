const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    followerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
      index: true,
    },
    followingId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
      index: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted"],
      default: "accepted",
    },
  },
  {
    timestamps: true,
  },
);

// // compound unique index
followSchema.index({ followerId: 1, followingId: 1 }, { unique: true });

const followsModel = mongoose.model("follows", followSchema);
module.exports = followsModel;

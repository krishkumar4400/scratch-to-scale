const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

// index
likeSchema.index({ userId: 1 });
likeSchema.index({ postId: 1 });

// prevent duplicate entries
likeSchema.index({ userId: 1, postId: 1 }, { unique: true });

const likeModel = mongoose.model("likes", likeSchema);

module.exports = likeModel;

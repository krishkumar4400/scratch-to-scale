const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// indexes
shareSchema.index({ postId: 1 });
shareSchema.index({ userId: 1 });

// prevent duplicate shares
shareSchema.index({ postId: 1, userId: 1 }, { unique: true });

const shareModel = mongoose.model("shares", shareSchema);

module.exports = shareModel;

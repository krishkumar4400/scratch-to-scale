const mongoose = require("mongoose");

const saveSchema = new mongoose.Schema(
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
saveSchema.index({ postId: 1 });
saveSchema.index({ userId: 1 });

// prevent duplicate saves
saveSchema.index({ userId: 1, postId: 1 }, { unique: true });

const saveModel = mongoose.model("saves", saveSchema);

module.exports = saveModel;

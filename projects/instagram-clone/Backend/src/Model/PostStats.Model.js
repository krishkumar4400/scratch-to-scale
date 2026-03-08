const mongoose = require("mongoose");

const postStatsSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "posts",
      unique: true,
    },
    likesCount: {
      type: Number,
      default: 0,
    },
    commentsCount: {
      type: Number,
      default: 0,
    },
    sharesCount: {
      type: Number,
      default: 0,
    },
    savesCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

postStatsSchema.index({ postId: 1, createdAt: -1 });

const postStatsModel = mongoose.model("postStats", postStatsSchema);

module.exports = postStatsModel;

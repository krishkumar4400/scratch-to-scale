const mongoose = require("mongoose");

const postStatsSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "posts",
      unique: true,
      index: true,
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

postStatsSchema.index({ likesCount: -1 });
postStatsSchema.index({ sharesCount: -1 });
postStatsSchema.index({ commentsCount: -1 });
postStatsSchema.index({ createdAt: -1 });

const postStatsModel = mongoose.model("post_stats", postStatsSchema);

module.exports = postStatsModel;

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    caption: {
      type: String,
      require: true,
      trim: true,
    },
    location: {
      type: String,
      default: "",
    },
    mediaType: {
      type: String,
      require: true,
    },
    mediaUrl: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

// indexes
postSchema.index({ userId: 1 });
postSchema.index({ createdAt: -1 });
postSchema.index({ userId: 1, createdAt: -1 });

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;

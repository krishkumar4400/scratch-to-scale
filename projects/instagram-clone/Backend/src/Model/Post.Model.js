const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "User id is required to create a post"],
    },
    caption: {
      type: String,
      default: '',
      trim: true,
    },
    location: {
      type: String,
      default: "",
    },
    mediaType: {
      type: String,
      required: true,
    },
    mediaUrl: {
      type: String,
      required: [true, "Media URL is required for creating a post"],
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

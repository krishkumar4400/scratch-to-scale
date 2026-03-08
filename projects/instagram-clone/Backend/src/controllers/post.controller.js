const imagekit = require("../config/imagekit.js");
const postModel = require("../Model/Post.Model.js");
const postStatsModel = require("../Model/PostStats.Model.js");

async function createPost(req, res) {
  const { caption, location } = req.body;
  const mediaFile = req.file;

  if (!mediaFile) {
    return res.status(400).json({
      message: "Image is required",
      success: false,
    });
  }

  //   upload to imagekit
  const response = await imagekit.upload({
    file: mediaFile.buffer.toString("base64"),
    fileName: Date.now() + "-" + mediaFile.originalname,
    folder: "posts",
  });

  //   // get image url
  const mediaUrl = response.url;

  const post = await postModel.create({
    caption,
    location,
    mediaType: mediaFile.mimetype,
    mediaUrl,
    userId: req.userId,
  });

  await postStatsModel.create({
    postId: post._id,
  });

  return res.status(201).json({
    message: "Post created",
    success: true,
  });
}

async function getUserPosts(req, res) {
  const posts = await postModel.find({ userId: req.userId });
  return res.status(200).json({
    posts,
    success: true,
  });
}

async function getPostById(req, res) {
  const { postId } = req.params;

  const post = await postModel.findById(postId);
  return res.status(200).json({
    post,
  });
}

module.exports = {
  createPost,
  getUserPosts,
  getPostById,
};

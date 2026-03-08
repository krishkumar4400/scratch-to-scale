const postModel = require("../Model/Post.Model.js");
const postStatsModel = require("../Model/PostStats.Model.js");

async function createPost(req, res) {
  const { caption, location, mediaType, mediaUrl } = req.body;
  const post = await postModel.create({
    caption,
    location,
    mediaType,
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

module.exports = {
  createPost,
};

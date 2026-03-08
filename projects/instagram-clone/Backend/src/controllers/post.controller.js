const postModel = require("../Model/Post.Model.js");

async function createPost(req, res) {
  const { caption, location, mediaType, mediaUrl } = req.body;
  postModel.create({
    caption,
    location,
    mediaType,
    mediaUrl,
    userId: req.userId,
  });

  return res.status(201).json({
    message: "Post created",
    success: true,
  });
}

module.exports = {
  createPost,
};

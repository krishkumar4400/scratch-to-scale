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


async function getUserPosts(req, res) {
    const posts = await postModel.find({ userId: req.userId });
    return res.status(200).json({
        posts,
        success: true
    });
}

async function getPostById(req,res) {
    const {postId} = req.params

    const post = await postModel.findById(postId);
    return res.status(200).json({
        post 
    });
}

module.exports = {
  createPost,
  getUserPosts,
  getPostById,
};
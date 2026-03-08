const { default: mongoose } = require("mongoose");
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
  try {
    const { postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({
        message: "Invalid post id",
        success: false,
      });
    }

    const post = await postModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(postId),
          userId: new mongoose.Types.ObjectId(req.userId),
        },
      },

      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },

      {
        $lookup: {
          from: "post_stats",
          localField: "_id",
          foreignField: "postId",
          as: "stats",
        },
      },

      {
        $unwind: "$user",
      },

      {
        $unwind: {
          path: "$stats",
          preserveNullAndEmptyArrays: true,
        },
      },
    ]);
    console.log(post);

    if (!post.length) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    return res.status(200).json({
      post: post[0],
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

module.exports = {
  createPost,
  getUserPosts,
  getPostById,
};

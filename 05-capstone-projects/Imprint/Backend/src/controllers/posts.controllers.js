const imagekit = require("../config/imagekit.js");
const postModel = require("../Model/posts.models.js");
const { v4: uuidv4 } = require("uuid");
const { sanitizeFileName } = require("../utils/sanitizeFileName.js");
const mongoose = require("mongoose");

async function createPost(req, res) {
  try {
    const { caption } = req.body;
    const file = req.file;

    // sanitize original name
    const safeName = sanitizeFileName(file.originalname);

    // Generate a custom unique name
    const uniqueName = `${Date.now()}-${uuidv4()}-${safeName}`;

    const uploadResult = await imagekit.upload({
      file: file.buffer, // file buffer from multer
      fileName: uniqueName, // name of the file
      folder: "/insta/posts", // specified folder path
    });

    const post = await postModel.create({
      mediaUrl: uploadResult.url,
      mediaType: uploadResult.fileType,
      thumbnailUrl: uploadResult.thumbnailUrl,
      caption,
      userId: req.userId,
    });

    return res.status(201).json({
      message: "Post created successfully",
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

async function getAllPosts(req, res) {
  try {
    const posts = await postModel.find();
    console.log(posts);

    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    console.error(error);
    return res.status.json({
      message: "Internal server error",
      success: false,
    });
  }
}

async function getPostById(req, res) {
  try {
    const { postId } = req.params;
    if (!postId) {
      return res.status(400).json({
        message: "Post id is missing",
        success: false,
      });
    }

    // validate ObjectId format
    if (
      !mongoose.Types.ObjectId.isValid(postId) ||
      !mongoose.Types.ObjectId.isValid(req.userId)
    ) {
      return res.status(400).json({
        message: "Invalid post id format",
        success: false,
      });
    }

    const post = await postModel.findOne({ _id: postId, userId: req.userId });
    console.log(post);

    if (!post) {
      return res.status(404).json({
        message: "Post is not found or not authorized",
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

async function getPostsByUserId(req, res) {
  try {
    const userId = req.userId;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user id" });
    }

    const posts = await postModel.find({ userId }).sort({ createdAt: -1 });
    console.log(posts);
    return res.status(200).json({
      success: true,
      posts,
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
  getAllPosts,
  getPostById,
  getPostsByUserId,
};

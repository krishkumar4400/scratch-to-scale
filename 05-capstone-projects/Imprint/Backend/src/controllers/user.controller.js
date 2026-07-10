const followModel = require("../Model/follow.model.js");

async function followUser(req, res) {
  try {
    const { userId } = req.params;
    const result = await followModel.create({
      follower: req.userId,
      followee: userId,
    });

    return res.status(200).json({
      message: `You are now following ${userId}`,
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
    followUser 
};
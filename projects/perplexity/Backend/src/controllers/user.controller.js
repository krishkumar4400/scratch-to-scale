import userModel from "../Models/User.Model.js";

export async function registerController(req, res) {
  try {
    const { username, email, password } = req.body;

    let user = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (user) {
      return res.status(409).json({
        message:
          user.username === username
            ? "username already exists"
            : "email already exists",
        success: false,
      });
    }

    user = await userModel.create({
      username,
      email,
      password,
    });

    return res.json({
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

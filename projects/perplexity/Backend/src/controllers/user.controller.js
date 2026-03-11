import userModel from "../Models/User.Model";

export async function registerController(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Missing details",
        success: false,
      });
    }

    let user = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (user && user.username === username) {
      return res.status(409).json({
        message:
          user.username === username
            ? "username already exists"
            : "email already exists",
        success: false,
      });
    }

    user = await userModel.create({
        username,email,password 
    });

    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

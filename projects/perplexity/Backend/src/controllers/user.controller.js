import userModel from "../Models/User.Model.js";
import { sendMail } from "../services/mail.service.js";

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

    await sendMail({
      to: user.email,
      subject: "Welcome to perplexity",
      // text: `Hi ${username}, \n\nThank you for registering at Perplexity. We're excited to have you on board!\n\nBest regards, \nThe Perplexity Team`,
      html: `
                <p>Hi ${username},</p>
                <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on board!</p>
                <p>If you did not create an account, please ignore this email.</p>
                <p>Best regards,<br>The Perplexity Team</p>
        `,
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

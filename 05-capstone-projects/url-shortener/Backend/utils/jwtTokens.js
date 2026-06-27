import jwt from "jsonwebtoken";

export default async function generateAccessToken(userId) {
  try {
    return jwt.sign({ id: userId }, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "7d",
    });
  } catch (error) {
    console.error(error.message);
  }
}

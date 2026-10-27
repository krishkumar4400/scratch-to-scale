import { JWTPayload } from "@/types/user.types.ts";
import jwt from "jsonwebtoken";

const jwtSecret: string | undefined = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("JWT Secret is not defined");
}

const generateJWTToken = (payload: JWTPayload): string => {
  return jwt.sign(payload, jwtSecret, {
    expiresIn: "7d",
  });
};

const verifyJWT = (token: string): JWTPayload | null => {
  try {
    const decoded = jwt.verify(token, jwtSecret);
    if (typeof decoded === "string" || typeof decoded.userId !== "string") {
      return null;
    }
    return decoded as JWTPayload;

  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Invalid or expired jwt token");
  }
};

export { generateJWTToken, verifyJWT };

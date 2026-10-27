import { cookies } from "next/headers";
import dbConnect from "@/lib/database";
import { verifyJWT } from "@/lib/jwt";
import userModel from "@/models/User.model";
import type { IUser, JWTPayload } from "@/types/user.types";

export async function getCurrentUser(): Promise<IUser | null> {
  const cookieStore = await cookies();
  const token: string | undefined = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  const decoded: JWTPayload | null = verifyJWT(token);

  if (!decoded) {
    return null;
  }

  await dbConnect();

  const user: IUser | null = await userModel.findById(decoded.userId);

  return user;
}

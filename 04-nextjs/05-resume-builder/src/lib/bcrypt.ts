import { BcryptCompare } from "@/types/user.types.ts";
import bcrypt from "bcrypt";

const generateHash = async (password: string) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const comparePassword = async ({ password, hash }: BcryptCompare) => {
  return await bcrypt.compare(password, hash);
};

export { generateHash, comparePassword };

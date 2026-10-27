import { JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";

export enum userRoles {
  USER = "user",
  ADMIN = "admin",
}

export interface IUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: userRoles;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number
}

export interface RegisterBody {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface JWTPayload extends JwtPayload {
  userId: Types.ObjectId;
}

export interface JWTExpiry {
  expiresIn: string;
}

export interface BcryptCompare {
  password: string;
  hash: string;
}

export interface User {
  _id: Types.ObjectId;
  name: string;
  email: string;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

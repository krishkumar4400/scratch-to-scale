import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const userSchema = new Schema(
  {
    avatar: {
      type: String,
      default: `https://placehold.co/200x200`,
    },
    coverImage: {
      type: String,
      default: `https://placehold.co/400x200`,
    },
    username: {
      type: String,
      trim: true,
      index: true,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      index: true,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    fullname: {
      type: String,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
      select: false
    },
    emailVerificationToken: {
      type: String,
      select: false
    },
    emailVerificationTokenExpiry: {
      type: Date,
      select: false
    },
    resetPasswordToken: {
      type: String,
      select: false
    },
    resetPasswordTokenExpiry: {
      type: Date,
      select: false
    },
  },
  { timestamps: true },
);

userSchema.plugin(mongooseAggregatePaginate);

// pre hooks
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  // short lived access token
  return jwt.sign(
    {
      _id: this._id,
    },

    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    },
  );
};
userSchema.methods.generateRefreshToken = function () {
  // long lived refresh token
  return jwt.sign(
    {
      _id: this._id,
    },

    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    },
  );
};

userSchema.methods.generateTemporaryToken = function () {
  const unHashedToken = crypto.randomBytes(20).toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(unHashedToken)
    .digest("hex");

  const tokenExpiry = 20 * 60 * 1000; // 20 Minutes

  return {
    unHashedToken,
    hashedToken,
    tokenExpiry,
  };
};

const userModel = model.Users || model("Users", userSchema);
export default userModel;

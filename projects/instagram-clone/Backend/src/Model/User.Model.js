const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: [true, "This username is already taken"],
      required: [true, "Username is required"],
      trim: true,
      index: true,
      lowercase: true
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      index: true
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required"],
    },
    fullName: {
      type: String,
      default: "",
      trim: true
    },
    bio: {
      type: String,
      default: "",
      maxlength: 150
    },
    profilePicture: {
      type: String,
      default: "https://ik.imagekit.io/xvni7jpsb/OIP.webp",
    },
    website: {
      type: String,
      default: "",
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifyOTP: {
      type: String,
      default: null,
    },
    verifyOTPExpireAt: {
      type: Date,
      default: null,
    },
    resetOTP: {
      type: String,
      default: null,
    },
    resetOTPExpireAt: {
      type: Date,
      default: null,
    },
    accountStatus: {
      type: String,
      enum: ['active', 'suspended', 'deleted'],
      default: 'active'
    }
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

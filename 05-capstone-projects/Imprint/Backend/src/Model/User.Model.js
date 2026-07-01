const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    index: true,
    unique: true,
  },
  fullname: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: false,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model.User || mongoose.model("User", userSchema);
module.exports = userModel;

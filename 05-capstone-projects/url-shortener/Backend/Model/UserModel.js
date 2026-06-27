import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    isVerified: {type: Boolean, default: false},
    verifyOTP: {type: Date, default: Date.now()},
    resetPasswordOTP: {type: String, default: ''},
    resetPasswordOTPExpireAt: {type: Date, default: Date.now()},
}, {
    timestamps: true
});

const UserModel =
  mongoose.model.usermodel || mongoose.model("usermodel", userSchema);

export default UserModel;
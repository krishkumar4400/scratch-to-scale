import { IUser, userRoles } from "@/types/user.types.ts";
import mongoose, { Model, models } from "mongoose";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },

    phone: {
      type: String,
      trim: true,
      unqiue: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    role: {
      type: String,
      enum: Object.values(userRoles),
      default: userRoles.USER,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// userSchema.pre("save", async function() {});

const userModel: Model<IUser> =
  (models.User as Model<IUser>) || mongoose.model<IUser>("User", userSchema);

export default userModel;

import mongoose, { model, Schema } from "mongoose";

const blacklistedTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const blacklistedTokenModel =
  model.BlackListedToken || model("BlackListedToken", blacklistedTokenSchema);

export default blacklistedTokenModel;

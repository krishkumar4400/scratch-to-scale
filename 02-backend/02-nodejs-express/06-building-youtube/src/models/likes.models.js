import mongoose, { model, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
const likesSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: "posts",
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "videos",
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "comments",
    },
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true },
);

likesSchema.plugin(mongooseAggregatePaginate);
const likesModel = model.Likes || model("Likes", likesSchema);
export default likesModel;

import mongoose, { model, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
const commentRepliesSchema = new Schema(
  {
    comment: {
      type: Schema.Types.ObjectId,
      ref: "comments",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    likesCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

commentRepliesSchema.plugin(mongooseAggregatePaginate);

const commentRepliesModel =
  model.CommentReplies || model("CommentReplies", commentRepliesSchema);
export default commentRepliesModel;

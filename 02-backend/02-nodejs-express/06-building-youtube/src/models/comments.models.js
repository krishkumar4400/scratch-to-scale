import mongoose, { model, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentsSchema = new Schema(
  {
    video: {
      type: Schema.Types.ObjectId,
      ref: "Videos",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

commentsSchema.plugin(mongooseAggregatePaginate);

const commentsModel = model.Comments || model("Comments", commentsSchema);
export default commentsModel;

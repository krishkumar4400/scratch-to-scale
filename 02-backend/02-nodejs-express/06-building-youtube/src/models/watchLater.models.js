import mongoose, { model, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const watchLaterSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Videos",
    },
  },
  { timestamps: true },
);

watchLaterSchema.index({ user: 1, video: 1 }, { unique: true });

watchLaterSchema.plugin(mongooseAggregatePaginate);

const watchLaterModel =
  model.WatchLater || model("WatchLater", watchLaterSchema);
export default watchLaterModel;

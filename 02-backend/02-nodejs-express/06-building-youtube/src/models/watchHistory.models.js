import mongoose, { model, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const watchHistorySchema = new Schema(
  {
    videos: {
      type: Schema.Types.ObjectId,
      ref: "videos",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true },
);

watchHistorySchema.plugin(mongooseAggregatePaginate);

const watchHistoryModel =
  model.WatchHistory || model("WatchHistory", watchHistorySchema);
export default watchHistoryModel;

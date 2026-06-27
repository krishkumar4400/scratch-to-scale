import mongoose, { model, Schema } from "mongoose";
import {
  AvailableVideoVisibility,
  VideoVisibilityEnum,
} from "../utils/constants.js";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const viewsSchema = new Schema(
  {
    video: {
      type: Schema.Types.ObjectId,
      ref: "videos",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    timeSpent: {
      type: Number,
    },
  },
  { timestamps: true },
);

viewsSchema.plugin(mongooseAggregatePaginate);

const viewsModel = model.Views || model("Views", viewsSchema);
export default viewsModel;

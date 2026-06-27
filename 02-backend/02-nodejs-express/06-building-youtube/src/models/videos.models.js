import mongoose, { model, Schema } from "mongoose";
import {
  AvailableVideoVisibility,
  VideoVisibilityEnum,
} from "../utils/constants.js";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videosSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    videoFile: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
    visibility: {
      type: String,
      enum: AvailableVideoVisibility,
      default: VideoVisibilityEnum.PRIVATE,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  { timestamps: true },
);

videosSchema.plugin(mongooseAggregatePaginate);

const videosModel = model.Videos || model("Videos", videosSchema);
export default videosModel;

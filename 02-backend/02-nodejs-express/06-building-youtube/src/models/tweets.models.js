import mongoose, { model, Schema } from "mongoose";
import {
  AvailableVideoVisibility,
  VideoVisibilityEnum,
} from "../utils/constants.js";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const tweetsSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    attachment: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  { timestamps: true },
);

tweetsSchema.plugin(mongooseAggregatePaginate);

const tweetsModel = model.Tweets || model("Tweets", tweetsSchema);
export default tweetsModel;

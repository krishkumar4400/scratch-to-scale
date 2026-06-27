import mongoose, { model, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const channelSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    channelName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    subscriberCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

channelSchema.plugin(mongooseAggregatePaginate);

const channelModel = model.Channels || model("Channels", channelSchema);
export default channelModel;

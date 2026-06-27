import mongoose, { model, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const subscriptionShema = new Schema(
  {
    channel: {
      type: Schema.Types.ObjectId,
      ref: "Channels",
    },
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true },
);

subscriptionShema.plugin(mongooseAggregatePaginate);

const subscriptionModel =
  model.Subscriptions || model("Subscriptions", subscriptionShema);
export default subscriptionModel;

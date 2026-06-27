import mongoose, { model, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

playlistSchema.plugin(mongooseAggregatePaginate);

const playlistModel = model.Playlist || model("Playlist", playlistSchema);
export default playlistModel;

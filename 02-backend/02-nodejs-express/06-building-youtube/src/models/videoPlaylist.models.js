import mongoose, { model, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoPlaylistSchema = new Schema(
  {
    playlist: {
      type: Schema.Types.ObjectId,
      ref: "Playlist",
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Videos",
      required: true,
    },
  },
  { timestamps: true },
);

videoPlaylistSchema.index({ playlist: 1, video: 1 }, { unique: true });

videoPlaylistSchema.plugin(mongooseAggregatePaginate);

const videoPlaylistModel =
  model.VideoPlaylist || model("VideoPlaylist", videoPlaylistSchema);
export default videoPlaylistModel;

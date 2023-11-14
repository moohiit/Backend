import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudnary url
      required: true,
    },
    thumbnail: {
      type: String, //cloudnary url
      required: true,
    },
    title: {
      type: string,
      required: true
    },
    description: {
      type: string,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    views: {
      type: Number,
      default: 0
    },
    isPublished:{
      type: Boolean,
      default: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    }
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongoosePaginate);
export const Video = mongoose.model("Video", videoSchema);
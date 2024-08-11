import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  command: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Video || mongoose.model("Video", videoSchema);

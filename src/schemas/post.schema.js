const mongoose = require("../../mongodb_init");
const { String, ObjectId, Date, Number } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema(
  {
    creator: {
      type: ObjectId,
      required: true,
      ref: "users",
    },
    board: {
      type: ObjectId,
      required: true,
      ref: "boards",
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    type: {
      type: String,
      enum: ["basic", "notification"],
      default: "basic",
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const Post = mongoose.model("posts", postSchema);
module.exports = Post;

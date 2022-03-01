const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please name is required"],
    },
    title: {
      type: String,
      required: [true, "please title is required"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "please description is required"],
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };

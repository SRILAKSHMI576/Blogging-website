const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  description: String,
  likes: Number,
  image_url: String,
  author: String,
  createdAt: Number,
  updatedAt: Number
});

const Post = mongoose.model("Posts", postSchema);

module.exports = Post;

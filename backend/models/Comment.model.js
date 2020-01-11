const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  commented_by: String,
  post_id: String,
  comment: String,
  createdAt: Number,
  updatedAt: Number
});

const Comment = mongoose.model("Comments", commentSchema);

module.exports = Comment;

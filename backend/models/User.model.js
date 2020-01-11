const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  bio: String,
  gender: String,
  age: Number,
  first_name: String,
  last_name: String,
  createdAt: Number,
  updatedAt: Number
});

const User = mongoose.model("Users", userSchema);
module.exports = User;

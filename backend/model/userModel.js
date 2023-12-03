const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  avatar: String,
  domain: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model("User", userSchema, "user-list");

module.exports = User;

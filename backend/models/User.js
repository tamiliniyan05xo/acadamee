const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  courses: [
    {
      title: String,
      progress: Number,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
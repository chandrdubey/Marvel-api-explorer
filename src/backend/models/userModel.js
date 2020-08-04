const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favcharecter: [
    {
      type: Number,
      default: 0,
    },
  ],
  favcomics: [
    {
      type: Number,
      default: 0,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);

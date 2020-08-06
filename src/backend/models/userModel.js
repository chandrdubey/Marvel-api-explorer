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
  favcharecters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Charecter"
   }
],
  favcomics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comic"
 }]
});

module.exports = mongoose.model("User", userSchema);

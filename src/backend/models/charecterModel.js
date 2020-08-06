const mongoose = require("mongoose");

const charecterSchema = mongoose.Schema({
  name: {
    type: String,
  },
  charecter_id: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Charecter", charecterSchema);

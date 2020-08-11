const mongoose = require("mongoose");

const comicSchema = mongoose.Schema({
  name: {
    type: String,
  },
  comic_id: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Comic", comicSchema);

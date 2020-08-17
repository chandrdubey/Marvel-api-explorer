const User = require("../models/userModel");
const Comic = require("../models/comicModel");

module.exports = {
  addFavComic: async (req, res) => {
    try {
      //taking user id from the req
      console.log(req.body);
      console.log(req.user);
      const comic = await Comic.create(req.body);
      console.log(req.params);
      console.log(comic);
      const user = await User.findById(req.params.userId)
        .populate("favcomics")
        .exec();
      console.log(user);
      user.favcomics.push(comic);
      user.save();

      console.log(user);
      console.log(user.favcomics);
      res.status(200).json({
        data: {
          favcomics: user.favcomics,
        },
      });
    } catch (err) {
      console.log("there is an error ", err);
    }
  },
  getFavComics: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId)
        .populate("favcomics")
        .exec();
      res.status(200).json({
        data: {
          favcomics: user.favcomics,
        },
      });
    } catch (err) {
      console.log(`there is an error ${err}`);
    }
  },
};

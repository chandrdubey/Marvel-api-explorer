const User = require("../models/userModel");
const Comic = require("../models/comicModel");

module.exports = {
  //adding comic to fav list of comics of user 
  addFavComic: async (req, res) => {
    try {
      //taking user id from the req
      // console.log(req.body);
      // console.log(req.user);
      const comic = await Comic.create(req.body);
      // console.log(req.params);
      // console.log(comic);
      const user = await User.findById(req.params.userId)
        .populate("favcomics")
        .exec();
      // console.log(user);
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
  //getting fav list of comics of user from the database
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
   //Remove comics from the favourite list
   removeFavComic : async (req, res) =>{
    
    //console.log(req.body);
    try{
      //taking user id from the req
     const {comicId} = req.body;
      console.log(req.user);
      //now getting user detaiil from the database,here populate used to give all data of fav comics which stored in data base
      const user = await User.findById(req.params.userId).populate('favcomics').exec();
      user.favcomics = user.favcomics.filter(item => item.comic_id != comicId);
     
      // console.log(user);
      // console.log(user.favcomics);
      user.save();
      res.status(200).json({
          data: {
            favcomics: user.favcomics,
          }
        });
       }
       catch(err){
          console.log("there is an error " ,err)
       }
   
    
}
};

const User = require('../models/userModel')
const Charecter = require('../models/charecterModel')
const Comic = require('../models/comicModel')
module.exports = {
  addFavCharecter: async (req, res) => {
    try{
   //taking user id from the req
   console.log(req.body);
   console.log(req.user);
   const charecterFound = await Charecter.findOne({charecter_id : req.body.charecter_id});
   const user = await User.findById(req.params.userId).populate('favcharecters').exec();
   if(charecterFound){
    user.favcharecters.push(charecterFound);
   }
   else{
    const charecter = await Charecter.create(req.body);
    user.favcharecters.push(charecter);
   } 
   user.save();

  
   console.log(user);
   console.log(user.favcharecters);
   res.status(200).json({
       data: {
         favcharecters: user.favcharecters,
       }
     });
    }
    catch(err){
       console.log("there is an error " ,err)
    }
   

  },
  addFavComic : async(req, res) =>{
    try{
      //taking user id from the req
      console.log(req.body);
      console.log(req.user);
      const comic = await Comic.create(req.body);
      console.log(req.params);
      console.log(charecter);
      const user = await User.findById(req.params.userId).populate('favcomics').exec();
      console.log(user);
      user.favcomics.push(comic);
      user.save();
     
      console.log(user);
      console.log(user.favcharecters);
      res.status(200).json({
          data: {
            favcomics: user.favcomics,
          }
        });
       }
       catch(err){
          console.log("there is an error " ,err)
       }
      
   
  },
  removeFavCharecter : async (req, res) =>{
    
      console.log(req.body);
      try{
        //taking user id from the req
       const {charecterId} = req.body;
        console.log(req.user);
        const user = await User.findById(req.params.userId).populate('favcharecters').exec();
        user.favcharecters = user.favcharecters.filter(item => item.charecter_id != charecterId);
       
        console.log(user);
        console.log(user.favcharecters);
        res.status(200).json({
            data: {
              favcharecters: user.favcharecters,
            }
          });
         }
         catch(err){
            console.log("there is an error " ,err)
         }
     
      
  },
  getFavCharecters : async (req ,res) =>{
    try {
      const user = await User.findById(req.params.userId).populate('favcharecters').exec();
      res.status(200).json({
        data: {
          favcharecters: user.favcharecters,
        }
      });
     }
     catch(err){
       console.log(`there is an error ${err}`);
     }
  
    }
   
};

const User = require('../models/userModel')

module.exports = {
  addFavCharecter: async (req, res) => {
    try{
   //taking user id from the req
   const { userId,charcterId } = req.body;
   console.log(req.body)
   let charId = charcterId;
   const user = await User.findByIdAndUpdate(
    { _id: userId },
    {
       $push: {    
        favcharecter: charId        // Bold Part will be your answer object
       }
    },
    {new: true }                 // To get the updated results in return            
  ).exec();
  //  console.log(user);
  //  user.favcharecter.push(charcterId);
  //  user.save();
   console.log(user.favcharecter);
   console.log(user);
   res.status(200).json({
       data: {
         id: user._id,
         email: user.email,
         name: user.name,
         favcharecter: user.favcharecter,
         favcomic: user.favcomic
       }
     });
    }
    catch(err){
       console.log("there is an error " ,err)
    }
   

  },
};

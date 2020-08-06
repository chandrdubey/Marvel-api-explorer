const User = require('../models/userModel')
const Charecter = require('../models/charecterModel')
module.exports = {
  addFavCharecter: async (req, res) => {
    try{
   //taking user id from the req
   console.log(req.body);
   console.log(req.user);
   const charecter = await Charecter.create(req.body);
   console.log(req.params);
   console.log(charecter);
   const user = await User.findById(req.params.userId);
   console.log(user);
   user.favcharecters.push(charecter);
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
};

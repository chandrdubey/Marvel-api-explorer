const User = require('../models/userModel')
const Charecter = require('../models/charecterModel')

module.exports = {
  //add charcter to the favourite list of the user 
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
 //Remove charecter from the favourite list
  removeFavCharecter : async (req, res) =>{
    
      console.log(req.body);
      try{
        //taking user id from the req
       const {charecterId} = req.body;
        console.log(req.user);
        //now getting user detaiil from the database,here populate used to give all data of fav chrecters stored in data base
        const user = await User.findById(req.params.userId).populate('favcharecters').exec();
        user.favcharecters = user.favcharecters.filter(item => item.charecter_id != charecterId);
       
        console.log(user);
        console.log(user.favcharecters);
        user.save();
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
  //getting list of fav charecters of user from the database
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

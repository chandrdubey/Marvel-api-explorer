const User = require('../models/userModel')

module.exports = {
  addFavCharecter: async (req, res) => {
      //taking user id from the req
    const { userId, charcterId } = req.body;
   
    let user = await User.findById(userId);
    user.favcharecter.push(charcterId);
    user.save();
    console.log(user);
  },
};

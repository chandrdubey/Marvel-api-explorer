const authValidation = require("../validations/authValidation");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
module.exports = {
  userRegister: async (req, res) => {
    console.log(req.body);
    //validate the user detail
    const { error } = await authValidation.registerValidation(req.body);
    if (error) {
      console.log(error.details[0].message);
      return res.json({
        status: 404,
        message: error.details[0].message,
      });
    }
    const { name, password, email, confirm_password } = req.body;

    if (password != confirm_password) {
      //it will check the confirm  password equal to the password or not
      return res.json({
        status: 404,
        message: "Password and confirm password does not match",
      });
    }

    User.findOne({ email: email }, async (err, user) => {
      if (err) {
        console.log(`there is an error ${error}`);
      }
      if (user) {
        //checking if  email is unique or not
        return res.json({
          status: 404,
          message: "Email already exist ",
        });
      } else {
        try {
          // creating hash of password
          const salt = await bcrypt.genSalt(10);
          hashPassword = await bcrypt.hash(password, salt)
          console.log(hashPassword);
          //saving user to the database
          const user = await User.create({
            name: name,
            email: email,
            password: hashPassword,
          });
          var token = jwt.sign(
            { id: user._id, email: user.email, name: user.name },
            process.env.JWT_SECRET,{expiresIn:"2d"}
          );
          res.status(200).json({
            token,
            data: {
              user_detail :{
                id: user._id,
                email: user.email,
                name: user.name,
              },
            }
          });
        } catch (err) {
          res.status(404).send(err);
        }
      }
    });
    //     res.status(200).json( {body: req.body.data});
  },
  userLogin: async (req, res) => {
    try{
         //validate the user detail
    const { error } = await authValidation.loginValidation(req.body);

    // if there is an error thne error messeage will be send as res

    if (error) {
      console.log(error.details[0].message);
      return res.json({
        status: 404,
        message: error.details[0].message,
      });
    }
    //checkking if email exist or not
    const user = await User.findOne({ email: req.body.email }).populate('favcharecters').populate('favcomics').exec();
    console.log(user);
    
    if (!user) {
      return res.json({
        status: 404,
        message: "Email does not exist",
      });
    }
    console.log(user.populated());
    //checking password

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      console.log("Wrong password");
      return res.json({
        status: 404,
        message: "Wrong password",
      });
    }
    var token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET, {expiresIn:"2d"}
    );
    console.log("you are logged in !");
    res.status(200).json({
      token,
      data: {
        user_detail :{
          id: user._id,
          email: user.email,
          name: user.name,
        },
         favcharecters: user.favcharecters,
         favcomics:   user.favcomics
      },
    });

    }
    catch(err){
      console.log(`there is an error ${err}`);
    }
 
  },
};

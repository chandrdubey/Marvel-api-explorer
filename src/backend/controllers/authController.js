const authValidation = require('../validations/authValidation');
const User = require('../models/userModel');
module.exports = {
    register : async (req , res) =>{
        console.log(req.body);
        const {error} =await authValidation.registerValidation(req.body);
        if(error)
        {
            console.log( error.details[0].message );
            return res.json({
                status: 404,
                message: error.details[0].message 
            });
        }
        const {name, password,email , confirm_password} = req.body;
        
        if(password != confirm_password){ //it will check the password equal to the confirm password or not.
            return res.json({
                status: 404,
                message: "confirm password does not equal to password"
            });
        }
        User.findOne({email : email},(err, user) =>{
            if(err){
                console.log(`there is an error ${error}`);
            }
            if(user){
                return res.json({
                    status: 404,
                    message: "email already exist "
                });
            }
            else{
                User.create({})
            }
        })
        
       
   //     res.status(200).json( {body: req.body.data});
    }
}
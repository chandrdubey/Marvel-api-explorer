const passport_local  =  require('passport-local').Strategy;
const passport  = require('passport');
const User=require('../models/userModel');

passport.use(new LocalStrategy(
  {  usernameField: 'email' },
    function(email, password, done) {  // this function is used to auhenticate by using email and password
      User.findOne({ email: email }, function (err, user) {
        if (err) { 
            return done(err); 
        }
        if (!user) {  //if user not found in database 
            console.log('user not found') 
             return done(null, false); 
            } 
        if (!user.verifyPassword(password)) {
            console.log('password does not matched')  //if password does not matched 
             return done(null, false);
             }
        return done(null, user);    // if user and password both are correct we return user
      });
    }
  ));

  
//serializing the user to decide which key is to be set in the cookies
passport.serializeUser(function(user, done)
{
    done(null, user.id);
});
//deserializing the user from the key in the cookie
passport.deserializeUser(function(id, done)
{
    User.findById(id, (error, user)=>
    {
        if(error)
        {
            console.log('Error when deserializing the user: passport-local-strategy', error);
        }
        done(null, user);
    });
});

module.exports = passport;
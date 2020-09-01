const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User=require('../models/userModel');
require('dotenv').config();
// At a minimum, you must pass these options (see note after this code snippet for more)
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey:process.env.JWT_SECRET
};
console.log();

// The JWT payload is passed into the verify callback
passport.use(new JwtStrategy(options, function(jwt_payload, done) {
    
    // We will assign the `sub` property on the JWT to the database ID of user
    User.findOne({_id: jwt_payload.id}, function(err, user) {
        
        // This flow look familiar?  It is the same as when we implemented
        // the `passport-local` strategy
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
        
    });
    
}));

module.exports = passport;
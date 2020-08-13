const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const passport=require('passport');
const passportJwt=require('../config/passport-jwt-strategy');
const jwt = require('jsonwebtoken');
const authenticateJWT = (req, res, next) => {
    console.log(req.headers);
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, "silver", (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
//Route : adding chaarcter to the user's favourite charecters list 
router.post('/:userId/charecters/favourite' , authenticateJWT, userController.addFavCharecter);

//Route : adding comics to the user's favourite comics list 
router.post('/:userId/comics/favourite' , userController.addFavComic);

//Route : it will remove the charecter from the fav charecter array of user
router.post('/:userId/charecters/favourite/delete',authenticateJWT, userController.removeFavCharecter);

//Route : it will provied the favourite charecters array as response of the api
router.get('/:userId/charecters/favourite' , authenticateJWT, userController.getFavCharecters);
module.exports = router;
// passport.authenticate('jwt', { session: false })
const express = require('express');
const charecterController = require('../controllers/charecterController');
const comicController = require('../controllers/comicController');
const router = express.Router();

//const passportJwt=require('../config/passport-jwt-strategy');
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
router.post('/:userId/charecters/favourite/add' , authenticateJWT, charecterController.addFavCharecter);



//Route : it will remove the charecter from the fav charecter array of user
router.post('/:userId/charecters/favourite/delete',authenticateJWT, charecterController.removeFavCharecter);

//Route : it will provied the favourite charecters array as a response of the api
router.get('/:userId/charecters/favourite' , authenticateJWT, charecterController.getFavCharecters);

//Route : it will provied the favourite comics array as a response of the api
router.get('/:userId/comics/favourite' , authenticateJWT, comicController.getFavComics);

//Route : adding comic to the user's favourite comics list 
router.post('/:userId/comics/favourite/add' ,authenticateJWT ,comicController.addFavComic);
module.exports = router;
// passport.authenticate('jwt', { session: false })
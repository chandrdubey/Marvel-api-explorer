const express = require('express');
const charecterController = require('../controllers/charecterController');
const comicController = require('../controllers/comicController');
const router = express.Router();
const passport = require('passport');
//Route : adding chaarcter to the user's favourite charecters list 
router.post('/:userId/charecters/favourite/add' , passport.authenticate('jwt', { session: false }), charecterController.addFavCharecter);



//Route : it will remove the charecter from the fav charecter array of user
router.post('/:userId/charecters/favourite/delete',passport.authenticate('jwt', { session: false }), charecterController.removeFavCharecter);

//Route : it will provied the favourite charecters array as a response of the api
router.get('/:userId/charecters/favourite' , passport.authenticate('jwt', { session: false }), charecterController.getFavCharecters);

//Route : it will provied the favourite comics array as a response of the api
router.get('/:userId/comics/favourite' , passport.authenticate('jwt', { session: false }), comicController.getFavComics);

//Route : adding comic to the user's favourite comics list 
router.post('/:userId/comics/favourite/add' ,passport.authenticate('jwt', { session: false }) ,comicController.addFavComic);

//Route : it will remove the charecter from the fav charecters list of user
router.post('/:userId/comics/favourite/delete',passport.authenticate('jwt', { session: false }), comicController.removeFavComic);

module.exports = router;
//  passport.authenticate('jwt', { session: false })
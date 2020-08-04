const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.post('/charecters/:charId/favourites' , userController.addFavCharecter);


module.exports = router;
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.post('/charecters/favourite' , userController.addFavCharecter);


module.exports = router;
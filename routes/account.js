let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let accountController = require('../controllers/account');

/* GET Route for the Book List page - READ Operation */
router.get('/', accountController.displayStudAccount);


module.exports = router;
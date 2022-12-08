let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let accountController = require('../controllers/account');

//Route to Student's account
router.get('/', accountController.displayStudAccount);
//the post also needed

//Route to Student's settings
router.get('/settings', accountController.displayStudSettings);


module.exports = router;
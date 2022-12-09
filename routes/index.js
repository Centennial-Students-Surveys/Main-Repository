var express = require('express');
var router = express.Router();

//Fetch the controllers
let indexController = require('../controllers/index');
let accountController = require('../controllers/account');

//Get Home Page through controller folder <>
router.get('/home', indexController.displayHomePage);

//Get Student's feedbacks through controller folder <>
router.get('/studfeeds', indexController.displayStudentFeedbacks)

//Get Professor's page through controller folder <>
router.get('/profrate', indexController.displayProfessors);

//Get About page through controller folder <>
router.get('/about', indexController.displayAboutPage);

//Get Sign in Page through controller folder <>
router.get('/sign_in', indexController.displayLoginPage);

router.post('/sign_in', indexController.processLoginPage);

//Route to user's settings from accout(only for authorized users)

//router.get('/account', indexController.dos;

//Route to user's account
//router.get('/account', function(req,res, next)
//{
//  res.render('account/account', {title: 'Hello user <Name>'});
//});

//Test Route to retrive all feedbacks
//router.get('/studfeeds', accountController.displayFeedbacks);

//Route to sign up form
router.get('/signup', indexController.displayRegisterPage);
//POST for sign up form(only for students)
router.post('/signup', indexController.processRegisterPage);

// <---For "log-out" Maksat edit--->
router.get('/logout', indexController.performLogout);


module.exports = router;
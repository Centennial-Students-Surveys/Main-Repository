var express = require('express');
var router = express.Router();

//Fetch the controllers
let indexController = require('../controllers/index');

//Get Home Page through controller folder <>
router.get('/', indexController.displayHomePage);

//Get Student's feedbacks through controller folder <>
router.get('/studfeeds', indexController.displayStudentFeedbacks)

//Get Professor's page through controller folder <>
router.get('/profrate', indexController.displayProfessors);

//Get About page through controller folder <>
router.get('/about', indexController.displayAboutPage);

//Get Sign in Page through controller folder <>
router.get('/sign_in', indexController.displayLoginPage);

router.post('/sign_in', indexController.processLoginPage);
/*router.get('/sign_in', function(req, res, next)
{
  res.render('sign_in', {title: 'Settings' });
});*/

//Route to user's settings from accout(only for authorized users)
router.get('/settings', function(req, res, next)
{
  res.render('settings/settings', {title: 'Settings' });
});

//Route to user's account
//router.get('/account', function(req,res, next)
//{
//  res.render('account/account', {title: 'Hello user <Name>'});
//});

//Route to sign up form(only for students)
router.get('/signup',function(req,res,next)
{
  res.render('signup/signup', {title: 'Registration Page'});
});

/* GET home page. */
//router.get('/', function(req, res, next)
//{
//  res.render('index',{title: 'Home Page' });
//});

//Route to sigh in page (if authorization was successfull) <needs to add a user id from db to /accout#id(post)
//router.get('/sign_in', function(req, res, next)
//{
//  res.render('sign_in', {title: 'Sign in page' });
//});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: 'Home Page' });
});

//Route to Student's feedbacks page
router.get('/studfeeds', function(req, res, next)
{
  res.render('studfeeds', {title: 'Students feedbacks page' });
});

//Route to Professor's rate page
router.get('/profrate', function(req, res, next)
{
  res.render('profrate', {title: 'Professors rate page' });
});

//Route to About College info
router.get('/about', function(req, res, next)
{
  res.render('about', {title: 'About college page' });
});

//Route to sigh in page (if authorization was successfull) <needs to add a user id from db to /accout#id(post)
router.get('/sign_in', function(req, res, next)
{
  res.render('sign_in', {title: 'Sign in page' });
});

//Route to user's settings from accout(only for authorized users)
router.get('/settings', function(req, res, next)
{
  res.render('settings/settings', {title: 'Settings' });
});

//Route to user's account
router.get('/account', function(req,res, next)
{
  res.render('account/account', {title: 'Hello user <Name>'});
});

//Route to sign up form(only for students)
router.get('/signup',function(req,res,next)
{
  res.render('signup/signup', {title: 'Registration Page'});
});

module.exports = router;

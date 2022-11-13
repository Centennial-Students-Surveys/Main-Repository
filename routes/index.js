var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: 'Home Page' });
});

router.get('/studfeeds', function(req, res, next)
{
  res.render('studfeeds', {title: 'Students feedbacks page' });
});

router.get('/profrate', function(req, res, next)
{
  res.render('profrate', {title: 'Professors rate page' });
});

router.get('/about', function(req, res, next)
{
  res.render('about', {title: 'About college page' });
});

router.get('/sign_in', function(req, res, next)
{
  res.render('sign_in', {title: 'Sign in page' });
});

router.get('/settings/settings', function(req, res, next)
{
  res.render('settings', {title: 'Settings' });
});

module.exports = router;

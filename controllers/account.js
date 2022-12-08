let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Feedbacks = require('../models/feedback');

module.exports.displayStudAccount = (req,res, next) =>
{
    res.render('account/account', {title: 'Account',displayName: req.user ? req.user.displayName : '' });
    //res.render('index', {title: 'Account',displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayStudSettings = (req,res, next) =>
{
    res.render('account/settings', {title: 'Settings',displayName: req.user ? req.user.displayName : '' });
    //res.render('index', {title: 'Account',displayName: req.user ? req.user.displayName : '' });
}
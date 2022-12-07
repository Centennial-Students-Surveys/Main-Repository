let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
//let Student = require('../models/student');

module.exports.displayStudAccount = (req,res, next) =>
{
    res.render('account/account', {title: 'Account',displayName: req.user ? req.user.displayName : '' });
}
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Feedbacks = require('../models/feedback');

//Render account page
module.exports.displayStudAccount = (req,res, next) =>
{
    res.render('account/account', {title: 'Account',displayName: req.user ? req.user.displayName : '' });
    //res.render('index', {title: 'Account',displayName: req.user ? req.user.displayName : '' });
}

//Render settings page
module.exports.displayStudSettings = (req,res, next) =>
{
    res.render('account/settings', {title: 'Settings',displayName: req.user ? req.user.displayName : '' });
}

//Post to submit feedback
module.exports.processAddFeedback = (req,res, next) =>
{
    let newFeedback = Feedbacks({
        "FirstName": req.body.FirstName,
        "LastName": req.body.LastName,
        "Feedback": req.body.Feedback,
        "Stars": req.body.Stars,
        "Comments": req.body.Comments
    });

    Feedbacks.create(newFeedback, (err, Feedbacks) => 
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/');
        }
    });
}
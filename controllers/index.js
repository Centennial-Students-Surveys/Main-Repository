let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//passport
let passport = require('passport');

// enable jwt
//let jwt = require('jsonwebtoken');
// jwt + DB 
let DB = require('../config/db');

//Student Model Instance 

let userModel = require('../models/user');
let feedbacksModel = require('../models/feedback');
let profmodel = require('../models/professor');

let User = userModel.User; // alias


//CONTROLLER ROUTES>>>>>>>>
//HP route
module.exports.displayHomePage = (req, res, next) => {
    res.render('home', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
}

//Route to Student's feedbacks page
//module.exports.displayStudentFeedbacks = (req, res, next) => 
//{
//   res.render('studfeeds', { title: 'Student feedbacks' });
//}

//Updated Route to Student's feedbacks page
module.exports.displayStudentFeedbacks = (req, res, next) => {
    feedbacksModel.find((err, feedbacks) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('studfeeds', { title: 'Student Feedbacks', Feedbacks: feedbacks, displayName: req.user ? req.user.displayName : '' });
        }
    });
}



//Route to About College info
module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About college page' });
};

//Route to account

//Get Route to Sign in
module.exports.displayLoginPage = (req, res, next) => {
    if (!req.user) {
        res.render('sign_in', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    } else {
        return res.redirect('/');
    }
}

//Post Sign in into Account
module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            // server err?
            if (err) {
                return next(err);
            }
            // is there a user login error?
            if (!user) {
                req.flash('loginMessage', 'Authentication Error');
                return res.redirect('/sign_in');
            }
            req.login(user, (err) => {
                // server error?
                if (err) {
                    return next(err);
                }

                /*const payload = 
                {
                    id: user._id,
                    displayName: user.displayName,
                    username: user.username,
                    email: user.email
                }

                const authToken = jwt.sign(payload, DB.Secret, {
                    expiresIn: 604800 // 1 week
                });*/
                return res.redirect('/account-account');
            });
        })(req, res, next);
}


module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if (!req.user) {
        res.render('signup/signup', {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    } else {
        return res.redirect('/');
    }
}


module.exports.processRegisterPage = (req, res, next) => {
    //Needs to be add some details
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log("Error: Inserting New User");
            if (err.name == "UserExistsError") {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('signup/signup', {
                title: 'Sign Up',
                messages: req.flash('signupMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        } else {
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/account-account');
            });
        }
    });
}


module.exports.performLogout = (req, res, next) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
}
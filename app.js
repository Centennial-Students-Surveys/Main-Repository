var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

//modules for authentication 
let session = require('express-session');
let passport = require('passport');

//let passport = require('./config/passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');


// <--------Maksat's edit-------->
// database setup
let mongoose = require('mongoose');
let DB = require('./config/db');

// point mongoose to the DB URI
mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', () => {
    console.log('Connected to MongoDB...');
});

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
// <--------Maksat's edit-------->


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

//Setup express session!!!!
app.use(session({
    secret: "SomeSecret",
    saveUninitialized: false,
    resave: false
}));

//Init flash
app.use(flash());

//Init passport
app.use(passport.initialize());
app.use(passport.session());

//passport student config

//create a a User Authentication Strategy
let userModel = require('./models/user');
let User = userModel.User;

//Auth.strategy
passport.use(User.createStrategy());

//Serialize and deserialize
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//passport.use(strategy);

// routing
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) 
{
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) 
{
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
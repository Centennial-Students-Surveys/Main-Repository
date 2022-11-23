let express = require ('express');
let router = express.Router();
let mongoose = require ('mongoose');


// jwt + DB 
let DB = require('../config/db)

//User Model Instance 

let studentModel = require ('../models/student');
let professorModel = require ('../models/professor');
let anonymousModel = require ('../models/anonymous');

let Student = studentModel.Student; 
let Professor = professorModel.Professor;
let AnonymousModel = anonymousModel.Anonymous;

//Anonymous
module.exports.processLoginPage = (req, res, next) =>  {
    if(!req.Anonymous)
    {
        res.render('views/sign_in',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.Anonymous ? req.Anonymous.displayName : ''
        })

    }
    else 
    {
        return res.redirect('/');
    }

}


module.exports.processLoginPage = ( req, res, next ) => {
    passport.authenticate ('local', 
    (err,Anonymous, info ) => {
        if(err)
        {
            return next(err);
        }
        if(!Anonymous)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/views/sign_in');
        }

        req.login(Anonymous, (err) => {
            if(err)
            {
                return next(err);
            }
            const payload = 
            {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn: 604800 // 1 week
            });

            return res.redirect(''); // need db
        })
    })(req, res, next);
}
module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.user)
    {
        res.render('signup/signup',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    
    let newUser = new User({
        username: req.body.username,
        
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('signup/signup',
            {
                title: 'Sign Up',
                messages: req.flash('signupMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
          

            return passport.authenticate('local')(req, res, () => {
                res.redirect('') // need db
            });
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}

//Student

module.exports.processLoginPage = (req, res, next) =>  {
    if(!req.Student)
    {
        res.render('views/sign_in',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.Student ? req.Student.displayName : ''
        })

    }
    else 
    {
        return res.redirect('/');
    }

}


module.exports.processLoginPage = ( req, res, next ) => {
    passport.authenticate ('local', 
    (err,Student, info ) => {
        if(err)
        {
            return next(err);
        }
        if(!Student)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/views/sign_in');
        }

        req.login(Student, (err) => {
            if(err)
            {
                return next(err);
            }
            const payload = 
            {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn: 604800 // 1 week
            });

            return res.redirect(''); // need db
        })
    })(req, res, next);
}
module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.student)
    {
        res.render('signup/signup',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.student ? req.student.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    
    let newStudent = new Student({
        username: req.body.username,
        
        email: req.body.email,
        displayName: req.body.displayName
    });

    Student.register(newStudent, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('signup/signup',
            {
                title: 'Sign Up',
                messages: req.flash('signupMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
          

            return passport.authenticate('local')(req, res, () => {
                res.redirect('') // need db
            });
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}

//teacher 


module.exports.processLoginPage = (req, res, next) =>  {
    if(!req.Teacher)
    {
        res.render('views/sign_in',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.Teacher ? req.Teacher.displayName : ''
        })

    }
    else 
    {
        return res.redirect('/');
    }

}


module.exports.processLoginPage = ( req, res, next ) => {
    passport.authenticate ('local', 
    (err,Teacher, info ) => {
        if(err)
        {
            return next(err);
        }
        if(!Teacher)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/views/sign_in');
        }

        req.login(Teacher, (err) => {
            if(err)
            {
                return next(err);
            }
            const payload = 
            {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn: 604800 // 1 week
            });

            return res.redirect(''); // need db
        })
    })(req, res, next);
}
module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.teacher)
    {
        res.render('signup/signup',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.teacher ? req.teacher.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    
    let newTeacher = new Teacher({
        username: req.body.username,
        
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newTeacher, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('signup/signup',
            {
                title: 'Sign Up',
                messages: req.flash('signupMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
          

            return passport.authenticate('local')(req, res, () => {
                res.redirect('') // need db
            });
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}

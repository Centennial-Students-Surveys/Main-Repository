// require modules for the Student Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        /*
        password: 
        {
            type: String,
            default: '';
            trim: true,
            required: 'password is required'
        }
        */
       email: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
       },
       displayName: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
       },
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "users"
    }
);
/*
let Student = mongoose.Schema(
{
    //FirstName: String,
    //LastName:  String,
    //Email: String,
    //Password: String,
    //Stars: Number,
    //Feedback: String,
    //Department: String
    FirstName: 
    {
        type: String,
        default: '',
        trim: true,
        required: 'First Name is required'
    },
    LastName: 
    {
        type: String,
        default: '',
        trim: true,
        required: 'Last Name is required'
    },
    Email: 
    {
        type: String,
        default: '',
        trim: true,
        required: 'Email is required'
    },
    /*
    Password: {
        type: String,
        default: '',
        trim: true,
        required: 'password is required'
    },
    Stars: 
    {
        type: Number,
        default: '',
        trim: true,
        required: 'Stars is required'
    },
    Feedback: 
    {
        type: String,
        default: '',
        trim: true,
        required: 'Feedback is required'
    },
    Department: 
    {
        type: String,
        default: '',
        trim: true,
        required: 'Department is required'
    }
},
{
    collection: "student"
}
);
*/


// configure options for Students Model
let options = ({ missingPasswordError: 'Wrong / Missing Password' });
Student.plugin(passportLocalMongoose, options);

module.exports.Student = mongoose.model('Student', Student);
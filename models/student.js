// require modules for the Student Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let Student = mongoose.Schema(
{
    FirstName: String,
    LastName:  String,
    Email: String,
    Password: String,
    Stars: Number,
    Feedback: String,
    Department: String
    /*
    firstName: {
        type: String,
        default: '',
        trim: true,
        required: 'First Name is required'
    },
    lastName: {
        type: String,
        default: '',
        trim: true,
        required: 'Last Name is required'
    },
    email: {
        type: String,
        default: '',
        trim: true,
        required: 'Email is required'
    },
    password: {
        type: String,
        default: '',
        trim: true,
        required: 'password is required'
    },
    stars: {
        type: String,
        default: '',
        trim: true,
        required: 'Stars is required'
    },
    feedback: {
        type: String,
        default: '',
        trim: true,
        required: 'Feedback is required'
    },
    department: {
        type: String,
        default: '',
        trim: true,
        required: 'Department is required'
    },*/
}, 
{
    collection: "students"
});

// configure options for Students Model
let options = ({ missingPasswordError: 'Wrong / Missing Password' });
Student.plugin(passportLocalMongoose, options);

module.exports.Student = mongoose.model('Student', Student);
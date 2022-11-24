// require modules for the Anonymous Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let Anonymous = mongoose.Schema(
    {
        Firstname: String,
        Comment: String,
        Stars: Number,
    /*feedback: {
        type: String,
        default: '',
        trim: true,
        required: 'Feedback is required'
    },
    stars: {
        type: Number,
        default: '',
        trim: true,
        required: 'email address is required'
    },
    complextiveLevel: {
        type: String,
        default: '',
        trim: true,
        required: 'Complextive Level is required'
    },
    department: {
        type: String,
        default: '',
        trim: true,
        required: 'Department is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }*/
}, {
    collection: "anonymouss"
});

// configure options for Anonymous Model

let options = ({ missingPasswordError: 'Wrong / Missing Password' });
Anonymous.plugin(passportLocalMongoose, options);
module.exports.Anonymous = mongoose.model('Anonymous', Anonymous);
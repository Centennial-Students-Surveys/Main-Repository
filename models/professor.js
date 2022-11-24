// require modules for the Professor Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let Professor = mongoose.Schema(
{
    Firstname: String,
    LastName:  String,
    StarsSkills: Number,
    StarsComplexity: Number,
    Department: String
    /*firstName: {
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
    stars: {
        type: Number,
        default: '',
        trim: true,
        required: 'Stars is required'
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
}, 
{
    collection: "professors"
});

// configure options for Professor Model
let options = ({ missingPasswordError: 'Wrong / Missing Password' });
Professor.plugin(passportLocalMongoose, options);
module.exports.Professor = mongoose.model('Professor', Professor);
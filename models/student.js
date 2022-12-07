// require modules for the Student Model
let mongoose = require('mongoose');

let studentModel = mongoose.Schema(
{
    FistName: String,
    LastName:  String,
    Email: String,
    Password: String,
    Stars: Number,
    Feedback: String,
    Department: String
},
{
    collection: "student"
});

module.exports = mongoose.model('Student', studentModel);
// require modules for the Professor Model
let mongoose = require('mongoose');

let Professor = mongoose.Schema(
{
    FirstName: String,
    LastName:  String,
    StarsSkills: Number,
    StarsComplexity: Number,
    Department: String
}, 
{
    collection: "professor"
});

module.exports = mongoose.model('Professor', Professor);
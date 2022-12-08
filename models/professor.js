// require modules for the Professor Model
let mongoose = require('mongoose');

let Professor = mongoose.Schema(
{
    Firstname: String,
    LastName:  String,
    StarsSkills: Number,
    StarsComplexity: Number,
    Department: String
}, 
{
    collection: "professors"
});

module.exports = mongoose.model('Professor', Professor);
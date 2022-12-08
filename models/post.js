let mongoose = require('mongoose');

let postModel = mongoose.Schema(
{
    UserId: Number,
    FirstName: String,
    LastName: String,
    Feedback: String,
    Stars: Number,
    Comments: Array
},
{
    collection: "posts"
});

module.exports = mongoose.model('Posts', postModel);
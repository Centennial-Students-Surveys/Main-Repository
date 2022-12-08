let mongoose = require('mongoose');

let feedbackModel = mongoose.Schema(
{
    UserId: Number,
    FirstName: String,
    LastName: String,
    Feedback: String,
    Stars: Number,
    Comments: Array
},
{
    collection: "feedbacks"
});

module.exports = mongoose.model('Feedbacks', feedbackModel);
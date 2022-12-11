let mongoose = require('mongoose');

const reqComment =
{
    type:String,
    required: true
}

const commentsSchema = mongoose.Schema(
{
    NickName: reqComment,
    Comment: reqComment
})

let feedbackModel = mongoose.Schema(
{
    UserId: Number,
    FirstName: String,
    LastName: String,
    Feedback: String,
    Stars: Number,
    Comments: [commentsSchema]
},
{
    collection: "feedbacks"
});

module.exports = mongoose.model('Feedback', feedbackModel);
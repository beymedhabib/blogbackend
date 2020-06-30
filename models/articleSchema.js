var mongoose = require('mongoose');
var article = new mongoose.Schema({
    image:String,
    title:String,
    subject:String,
    comment:[{
        comment: String,
        user:String,
        createdDate: {type: Date, default: Date.now()}
    }]
})
module.exports = mongoose.model("article",article)
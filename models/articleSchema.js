var mongoose = require('mongoose');
var article = new mongoose.Schema({
    image:String,
    title:String,
    subject:String
})
module.exports = mongoose.model("article",article)
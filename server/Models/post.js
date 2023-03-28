let mongoose = require('mongoose');
const user = require('./user');
const {ObjectId} = mongoose.Schema.Types

const PostSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        required : true
    },
    postedBy : {
        type : ObjectId,
        ref : "User"
    }


})

module.exports = mongoose.model("Post", PostSchema)
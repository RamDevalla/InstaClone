const express = require("express");
const { default: mongoose } = require("mongoose");
const postrouter = express.Router();
const bcrypt = require("bcryptjs");
const requireLogin = require("../Middleware/requireLogin");
const Post = require('../Models/post')


// to view all the posts
postrouter.get('/allposts',requireLogin, (req, resp)=>{
    Post.find().populate("postedBy" , "_id name")  // populate to view everything of that id, 2nd parameter "select" whatever we want to view in response
    .then(posts=>{
        resp.status(200).json({
            posts
        })
    }).catch(err=>{
        console.log(err)
    })
})

// to create a new Post
postrouter.post('/createpost',requireLogin, (req, resp)=>{
    const {title, body, pic} = req.body          // destructuring title, body from request.body
    if(!title || !body || !pic){
        return resp.status(422).json({error : "Please Add All the Fields"})
    }
    // console.log(req.user)  // for testing purpose
    // resp.send('ok')        // for testing purpose
    req.user.password = undefined;
    const post  = new Post({
        title, 
        body,
        photo : pic,
        postedBy : req.user
    })

    post.save().then(result=>{
        resp.json({ post : result})
    }).catch(err=>{
        console.log(err)
    })
})

// to get or view only logged user posts
postrouter.get('/myposts' ,requireLogin, (req, resp)=>{
    Post.find({postedBy : req.user._id}).populate('postedBy', '_id name')
    .then(myposts =>{
        resp.json({myposts})
    }).catch(err=>{
        console.log(err)
    })
})


module.exports = postrouter;
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../key')
const mongoose = require('mongoose')
const User = require('../Models/user')

module.exports=(req, resp, next)=>{
    const {authorization} = req.headers
    if(!authorization){
       return resp.status(401).json({error : " You must be Logged IN"})
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, JWT_SECRET, (err, payload)=>{
        if(err){
          return  resp.status(401).json({error : "You must be Logged IN"})
        }
        const {_id} = payload;
        User.findById(_id).then(userdata =>{
            req.user = userdata;
            next()
        })
        
    })
}
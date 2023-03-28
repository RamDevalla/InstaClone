const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const bcrypt = require("bcryptjs")
const User = require('../Models/user')
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../key')
const requireLogin = require('../Middleware/requireLogin') 

//---- SignUp part-----
router.post('/signup', (req, resp) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        resp.status(422).json({ error: "Kindly check and fill all the fields" })
    }
    User.findOne({ email: email }).then((saveduser) => {
            if (saveduser) {
                resp.status(422).json({ error: "Kindly check Email already exists" })
            } 
            bcrypt.hash(password, 12).then((hashedpaswword)=>{

                const user = new User({
                        name,
                        email,
                        password : hashedpaswword
                })
                user.save().then(user => { resp.json({message : "SignUp successfull"}) }).catch(err => { console.log(err) })

            })
            
    }).catch((err) => { console.log(err) })
})

//---- SignIn part-----
router.post('/signin', (req, resp)=>{
    const {email, password} = req.body;
    if(!email || !password){
       return resp.status(422).json({error : "Kindly fill Email or Password"})
    }
    User.findOne({email:email}).then(saveduser=>{
        if(!saveduser){
            return resp.status(400).json({error : "Invalid email or password"})
        }
        bcrypt.compare(password, saveduser.password).then(doMatch =>{
            if(doMatch){
                // resp.status(200).json({ Message : "SignedIn Successfully"})
                const token = jwt.sign({_id : saveduser._id}, JWT_SECRET) // generating token based on id
                const {_id, name, email} = saveduser        // destructuring
                resp.json({token, user:{_id, name, email}}) // sending token as response
            }
            else{
                return resp.status(400).json({error : "Invalid email or password"})
            }
        }).catch(err=>{ console.log(err)})
    })
})

module.exports = router;



// router.get('/protected', requireLogin, (req, resp)=>{  // for testing purpose of /protected request
//     resp.send("Hello , Welcome..!")
// })


/*
// to get the all the users in the database till now
router.get('/', async(req, resp)=>{
    try{
        const users = await User.find()
        resp.status(200).json(users);

    }catch(err){
        resp.send(`Error Occured ::: ${err}`)
    }
})
*/
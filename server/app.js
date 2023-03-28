const express = require("express")
const mongoose = require("mongoose")
const { MONGOURI } = require('./key')
const router = require('./Routes/auth')
const postrouter = require('./Routes/post')
const app = express();
const PORT = 8000;

// For checking the MongoDB connection setUp
mongoose.connect(MONGOURI)
mongoose.connection.on("connected", () => {
    console.log("connected to mongoose db") // IF connected gives result in console
})

mongoose.connection.on("error", (err) => {
    console.log(`Error occured : ${err}`)   // IF error Displays the error in console
})

require('./Models/user');
require('./Models/post')

app.use(express.json()) // To send and receiving data through JSON format
app.use(router); // Using the Router for api 
app.use(postrouter)

// To Know the Server working Right Or not and without Listen output Wont be display on any PORT
app.listen(PORT, () => {
    console.log(`Server running successfully on port : ${PORT}`)
})

/*
 // Checking the middleware
 
const customMiddleware = (req, res, next)=>{
    console.log("hey this is middleware");
    next();
}

// Simple api to of Home Page which display Hello

app.get('/home', (req, resp)=>{
     resp.send("Hello 'Welcome' :) ")
})

// Simple get api of About Page
app.get('/about', customMiddleware, (req, resp)=>{
    console.log("About")
    resp.send("About Page")
})
 */
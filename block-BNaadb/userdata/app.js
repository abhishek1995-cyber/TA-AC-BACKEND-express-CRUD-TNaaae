var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var userrouter = require('./routes/users');

// connecting to database;

mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log( err ? err : "connected")
})

// instiating the app
var app = express();

// middleware

app.use(express.urlencoded({extended:false}));
app.use(express.json());
// setup view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// routes middleware

app.use('/users',userrouter);

// error handler

app.use((req,res,next)=>{
    res.status(404);
    res.send('page not found')
})

// custom error handler
app.use((err,req,res,next)=>{
    res.send(err)
})

// listener 
app.listen(3000,()=>{
    console.log('listening to 3k')
})
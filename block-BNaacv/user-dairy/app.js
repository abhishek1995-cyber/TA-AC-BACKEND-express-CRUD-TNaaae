var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var usersrouter = require("./routes/users")

// connecting to databse
mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log( err ? err : "connected")
})

var app = express();

// middleware
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "views"))

app.use(express.urlencoded({extended: false}));

app.use('/users',usersrouter)
// routes



// listener

app.listen(3000,()=>{
    console.log('listening to 4k')
})
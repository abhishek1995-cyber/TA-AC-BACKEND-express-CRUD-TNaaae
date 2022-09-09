var express = require("express");
const { appendFile } = require("fs");
var mongoose = require("mongoose");
var path = require("path");
var userrouter = require('./routes/users')

// connecting to database
mongoose.connect("mongodb://localhost/user-diary-2",(err) => {
    console.log(err ? err : "Connected to database" );
});
// instantiating the app
var app = express();

// set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// routing middlewares

app.use('/users',userrouter)

// handle error

app.use((req,res,next) => {
    res.status(404).send('page not found')
});

// custom error handle 
app.use((err,req,res,next) => {
    res.send(err)
});
// listener

app.listen(3000,()=>{
    console.log('port listening to 3k')
});
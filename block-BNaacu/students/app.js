var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

// connect to mongodb

mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log(err? err: "connected")
});

var app = express();

// middlewares

app.use(express.json());

//  set view engine

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))


// routing miidleware

app.use('/students', require("./routes/student"))

// routes

app.get('/',(req,res)=>{
    res.send('welcome')
})

app.get('/students',(req,res)=>{
    var students = ['abhishek', "sushant","karan","gulati","ducati"];
    res.render("index",{students:students})
})

// student routes

// app.get("/students",(req,res)=>{

// })


// listener
app.listen(3000,()=>{
    console.log('listening to 3k')
})


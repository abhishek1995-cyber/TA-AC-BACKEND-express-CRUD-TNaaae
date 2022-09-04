var express = require('express');
var path = require("path")

// instiating the app
var app = express()


// middleware

app.use(express.json());



// setup view engine

app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"))

// routes

app.get("/",(req,res)=>{
    res.render('school',{name:"abhishek"})
})

// listener

app.listen(3000,()=>{
    console.log('listening to port 3k')
})
var express = require('express')
var router = express.Router();




router.get("/new",(req,res)=>{
    res.render("form")
});


router.post("/",(req,res)=>{
    res.send(req.body)
})


module.export = router
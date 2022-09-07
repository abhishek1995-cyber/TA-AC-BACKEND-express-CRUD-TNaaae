var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.render('users',{ list: ["ankit", "suraj", "prashant", "ravi"] })
});

router.get('/new',(req,res)=>{
    res.render("userForm")
})

router.get('/:id',(req,res)=>{
    res.render('singleUser',{ name: "rahul", email: "rahul@altcampus.io" });
})

router.delete('/:id',(req ,res)=>{
    //   if we have database connectivity then we  can delete the single user data 
})
// get a query from the  url and updates  the  data 
router.put('/:id',(req ,res)=>{
    // if we have  the database connectivity then we can update the data 
})



module.exports = router
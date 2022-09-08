

var express = require('express');
var router = express.Router();
var User = require('../models/user')


router.get('/',(req,res)=>{
    User.find({},(err,users)=>{
        // console.log(err,users)
        if(err) return next(err);
        res.render('users',{users:users})
    })
    
});


router.get('/new',(req,res)=>{
    res.render('form')
})
router.post('/',(req,res,next)=>{
    User.create(req.body,(err,createduser)=>{
        // console.log(err, createduser)
        if(err) return next(err)
        res.redirect('/users/new')
    })
})

router.get('/:id',(req,res,next)=>{
    var id = req.params.id;
    User.findById(id,(err,user)=>{
        console.log(user);
        if(err) return next(err);
        res.render('singleUser',{user:user})
    })
})

module.exports = router;
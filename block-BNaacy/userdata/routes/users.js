var express = require('express');
var router = express.Router();
var User = require('../models/user')


router.get('/',(req,res)=>{
    res.render('index')
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

module.exports = router;
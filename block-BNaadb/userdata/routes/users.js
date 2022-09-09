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
        // console.log(user);
        if(err) return next(err);
        res.render('bookDetail',{user:user})
    })
})

router.get('/:id/edit',(req,res,next)=>{
    var id = req.params.id;
    User.findById(id,(err,user)=>{
        // console.log(user);
        if(err) return next(err);
        res.render('edituserform',{user:user})
})
})

router.post('/:id',(req,res)=>{
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body,(err,updateduser)=>{
        if(err) return next(err);
        res.redirect("/users/" + id)
    })
})

router.get('/:id/delete',(req,res,next)=>{
    var id = req.params.id;
    User.findByIdAndDelete(id,(err,user)=>{
        if(err) return next(err);
        res.redirect("/users")
    })
})

module.exports = router;
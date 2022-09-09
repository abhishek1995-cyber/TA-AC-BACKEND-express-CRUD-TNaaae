var express = require('express');
var router = express.Router();
var user = require("../models/user");

router.get('/new',(req,res)=>{
    res.render('form')
})

router.post("/",(req,res,next)=>{
    // console.log(req.body)
    user.create(req.body,(err,createduser)=>{
        console.log(createduser)
        if(err) return next(err);
        res.redirect('/users')
    })
});
router.get('/', (req, res,next) => {
    // handle action
    user.find({},(err,user)=> {
        if(err) return next(err);
        res.render('listUsers',{ user: user })
    })
});

router.get('/:id',(req,res,next)=>{
    var id = req.params.id;
    user.findById(id,(err,user)=>{
        if(err) return next(err);
        res.render('singleUser',{user: user})
    })
});

router.get('/:id/edit',(req,res)=>{
    var id = req.params.id;
    user.findById(id,(err,user)=>{
        if(err) return next(err);
        res.render('editUser',{user: user})
    })
});
router.post('/:id',(req,res)=>{
    var id = req.params.id;
    user.findByIdAndUpdate(id, req.body,(err,updateduser)=>{
        if(err) return next(err);
        res.redirect("/users/" + id)
    })
});
router.get('/:id/delete',(req,res,next)=>{
    var id = req.params.id;
    user.findByIdAndDelete(id,(err,user)=>{
        if(err) return next(err);
        res.redirect("/users")
    })
})

module.exports = router;

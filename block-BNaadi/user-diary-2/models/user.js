var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userschema = new schema({
    name : {type:String, required: true},
    email : String,
    age: {type:Number, min: 18},
    bio : String
})

var User = mongoose.model('User',userschema);
module.exports= User
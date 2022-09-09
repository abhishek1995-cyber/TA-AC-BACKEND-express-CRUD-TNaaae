var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userschema = new schema({
    name : {type:String, required: true},
    email : {type:String, required: true},
    age: {type:Number, min: 18},
    bio : String,
    address : String,
    hobbies: [String]
})

var User = mongoose.model('User',userschema);
module.exports= User
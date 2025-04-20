var mongoose = require('mongoose');
let signupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:false,
    },
    email:String,
    password:String
})
const Signup = mongoose.model("signups",signupSchema);
module.exports = {Signup}
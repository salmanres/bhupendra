const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    },
    password:{
        type:String
    }
});

const usersdata = new mongoose.model('user', userSchema);
module.exports = usersdata;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: 'admin'
    }
},
    { timestamps: true }
);

const userdata = new mongoose.model('newuser', userSchema);
module.exports = userdata;
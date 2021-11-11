const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type : String,
        required : true,
        minlength : 6
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model('user', userSchema);

module.exports = User;
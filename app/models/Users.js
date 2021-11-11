const mongoose = require('mongoose');
const { isEmail } = require('validator') 

const userSchema = new mongoose.Schema({
    email: {
        type : String,
        required : [true, `Please provide an email`],
        unique : true,
        lowercase : true,
        validate: [(val)=>{  }, `Please provide a valid email address`]
    },
    name: {
        type: String,
        required: [true, `Please provide an name`],
    },
    password: {
        type : String,
        required : [true, `Please provide an password`],
        minlength : [6, `Password should be of minimum 6 letters`]
    },
    username: {
        type: String,
        required: [true, `Please provide an username`],
        unique: true
    }
})

const User = mongoose.model('user', userSchema);

module.exports = User;



/*
{
    "email": "aniket@abc.com",
    "password": "aniket",
    "name" : "Aniket Panwar",
    "username" : "mrintro"
}
*/
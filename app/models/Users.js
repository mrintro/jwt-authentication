const mongoose = require('mongoose');
const { isEmail } = require('validator')

const bcrypt = require('bcrypt')

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
});

userSchema.post('save', (doc, next) => {
    console.log("new user was created", doc)
    next();
})

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})


userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email })
    if(user) {
        const auth = await bcrypt.compare(password, user.password)
        if(auth) {
            
            return user
        } 
        throw Error("Incorrect Password")
    }
    throw Error("Invalid User")
}


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
const { handleAuthErrors } = require("../helpers/handleErrors");
const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")

dotenv.config()

const MAX_AGE = 3*24*60*60

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: MAX_AGE
    })
}

module.exports.signUp = async (req, res) => {

    const {email, name, password, username} = req.body;

    try{
        const user = await User.create({email, name, password, username})
        console.log(user)
        res.status(201).json({message:"User Created Successfully"});
    } catch(err) {
        const authError = handleAuthErrors(err);
        res.status(400).send(authError);
    }

}

module.exports.signin = async (req, res) => {
    console.log(req.body)

    const { email, password } = req.body

    try {
        console.log("Check Trying")
        const user = await User.login(email, password);
        const token = createToken(user._id);

        res.status(200).json({ user : user, token: token });
    } catch(rerr) {
        res.status(400).json({});
    }
    

    res.send("User logged in")
}

module.exports.signout = async (req, res) => {
    res.cookie('jwt', '', {maxAge : 1});
    res.redirect('/')
}
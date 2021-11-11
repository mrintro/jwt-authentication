const { handleAuthErrors } = require("../helpers/handleErrors");
const User = require("../models/Users");

module.exports.signUp = async (req, res) => {

    const {email, name, password, username} = req.body;

    try{
        const user = await User.create({email, name, password, username})
        console.log(user)
        res.status(201).json(user);
    } catch(err) {
        const authError = handleAuthErrors(err);
        res.status(400).send(authError);
    }

}

module.exports.signin = (req, res) => {
    res.send("User logged in")
}
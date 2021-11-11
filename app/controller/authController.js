const User = require("../../models/Users");

module.exports.signUp = async (req, res) => {


    console.log(req.body)

    const {email, name, password, username} = req.body;
    console.log({email, name, password, username})

    try{
        const user = await User.create({email, name, password, username})
        console.log(user)
        res.status(201).json(user);
    } catch(err) {
        console.log(err);
        res.status(400).send('error, user not created');
    }

}

module.exports.signin = (req, res) => {
    res.send("User logged in")
}
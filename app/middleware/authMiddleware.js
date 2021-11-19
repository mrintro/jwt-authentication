const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.redirect('/login')
            } else{
                console.log(decodedToken);
                next();
            }
        })
    }else{
        res.redirect('/login');
    }

}


const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        if(token){
            jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
                if(err) {
                    console.log(err.message);
                    next();
                } else{
                    console.log(decodedToken);
                    next();
                }
            })
        }
    } else{

    }
}

module.exports = { requireAuth }
const jwt = require('jsonwebtoken')

const autenticate = ((req, res, next)=>{
const authHeader = req.headers.authroization;

    if(!authenticate){
        res.status(401).json({
            message: "no token provided"
        })
    }
    const token = authHeader = authHeader.split('')[1]
})

module.exports = authenticate;
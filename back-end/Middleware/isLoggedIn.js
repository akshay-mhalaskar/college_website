const jwt = require('jsonwebtoken');
require('dotenv').config();

async function isLoggedIn(req, res, next) {
    try {
        if (!req.headers) {
            res.status(401).json({
                message: "There was an authentication error!"
            })
        }
        else {
            if (!req.headers.authorization) {
                res.status(401).json({
                    message: "There was an authentication error!"
                })
            }
            else {
                const token = req.headers.authorization.split(" ")[1];
                if (!token) {
                    res.status(401).json({
                        mesage: "There was an authentication error! Login Again"
                    })
                }
                else {
                    try {
                        const verifiedToken = jwt.verify(token, process.env.SIGN);
                        req.userID = verifiedToken.id;
                        req.isFaculty = verifiedToken.isFaculty;
                        req.isAdmin = verifiedToken.isAdmin;
                        next();
                    } catch (error) {
                        res.status(501).json({
                            message: "Invalid Token! Login Again"
                        })
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Sorry! There was an server-side error"
        })
    }
}

module.exports = isLoggedIn;
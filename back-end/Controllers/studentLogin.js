const user = require('../Model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function studentLogin(req,res){
    try {
        const {userEmail, userPassword} = req.body;
        if(!userEmail || !userPassword){
            res.status(401).json({
                message:"All Fields are neccessary"
            })
        }
        else{
            const userExists = await user.findOne({userEmail:userEmail,userPassword:userPassword});
            if(!userExists){
                res.status(404).json({
                    message:"Invalid User Email or Password!"
                })
            }
            else{
                try {
                    const token = jwt.sign({
                        id:userExists._id,
                        isFaculty:false,
                        isAdmin:false
                    },process.env.SIGN);
                    res.status(200).json({
                        message:'Welcome to Student Portal',
                        userToken:token
                    })
                } catch (error) {
                    res.status(501).json({
                        message:"There was an error while verifying Token! Login Again"
                    })
                }
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = studentLogin;
const user = require('../Model/faculty');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function facultyLogin(req,res){
    try {
        const {userEmail, userPassword} = req.body;
        if(!userEmail || !userPassword){
            res.status(401).json({
                message:"All Fields are neccessary"
            })
        }
        else{
            const facultyExists = await user.findOne({userEmail:userEmail,userPassword:userPassword});
            if(!facultyExists){
                res.status(404).json({
                    message:"Invalid User Email or Password!"
                })
            }
            else{
                try {
                    const token = jwt.sign({
                        id:facultyExists._id,
                        isFaculty:true,
                        isAdmin:facultyExists.isAdmin
                    },process.env.SIGN);
                    res.status(200).json({
                        message:'Welcome to Faculty Portal',
                        userToken:token,
                        facultyID:facultyExists._id,
                        isAdmin:facultyExists.isAdmin
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

module.exports = facultyLogin;
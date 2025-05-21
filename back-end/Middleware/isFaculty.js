const jwt = require('jsonwebtoken');

async function isFacultyCheck(req, res, next) {
    try {
        const { isFaculty } = req;
        if (isFaculty === undefined) {
            res.status(401).json({
                message: "Please Update your Web APP!"
            })
        }
        else {
            if (isFaculty === false) {
                res.status(401).json({
                    message: "You dont have valid Permission to access this route"
                })
            }
            else {
                next();
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Sorry! There was an server-side error"
        })
    }
}

module.exports = isFacultyCheck;
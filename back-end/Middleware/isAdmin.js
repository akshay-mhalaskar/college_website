async function validateAdmin(req, res, next) {
    try {
        const { isAdmin } = req;
        if (isAdmin === undefined) {
            res.status(401).json({
                message: "Please Update your Web APP!"
            })
        }
        else {
            if (isAdmin === true) {
                next();
            }
            else {
                res.status(401).json({
                    message: "You dont have valid Permission to access this route"
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Sorry! There was an server-side error"
        })
    }
}

module.exports = validateAdmin;
const leave = require('../Model/leave');

async function myLeaves(req, res) {
    try {
        const { userID } = req;
        if (!userID || userID.length !== 24) {
            res.status(401).json({
                message: "Invalid User! Please Login Again"
            })
        }
        else {
            const myAllLeav = await leave.find({ forStudent: userID });
            res.status(200).json({
                message: "Your Leaves are here",
                myAllLeavess: myAllLeav
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Sorry! There was an server-side error"
        })
    }
}

module.exports = myLeaves;
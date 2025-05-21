const clearance = require('../Model/clearance');
const user = require('../Model/user');

async function createClearance(req, res) {
    try {
        const { userID } = req;
        if (!userID || userID.length !== 24) {
            res.status(401).json({
                message: "Invalid User! Please Login Again"
            })
        }
        else {
            const { groupLeader, groupMemberFirst, groupMemberSecond, groupMemberThird } = req.body;
            if (!groupLeader || !groupMemberFirst || !groupMemberSecond || !groupMemberThird) {
                res.status(401).json({
                    message: "All Fields are neccessary"
                })
            }
            else {
                await clearance.create({ groupLeader, groupMemberFirst, groupMemberSecond, groupMemberThird , clearanceCreatedBy:userID});
                const updateUserClear = await user.findByIdAndUpdate({_id:userID},{clearanceFilled:true});
                if(!updateUserClear){
                    res.status(404).json({
                        message:"User Not Found! Please Login again"
                    })
                }
                else{
                    res.status(200).json({
                        message: "We have received your Clearance Request!"
                    })
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

module.exports = createClearance;
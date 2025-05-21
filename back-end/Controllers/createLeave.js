const leave = require('../Model/leave');
const user = require('../Model/user');

async function createLeave(req,res){
    try {
        const { userID } = req;
        if (!userID || userID.length !== 24) {
            res.status(401).json({
                message: "Invalid User! Please Login Again"
            })
        }
        else{
            const {fromDate,tillDate,reasonForLeave} = req.body;
            if(!fromDate || !tillDate || !reasonForLeave){
                res.status(404).json({
                    message:"All Fileds are neccessary!"
                })
            }
            else{
                const leaveCreated = await leave.create({fromDate:fromDate,tillDate:tillDate,reasonForLeave:reasonForLeave,forStudent:userID,isLeaveApproved:"Pending"});
                await user.findByIdAndUpdate({_id:userID},{$push:{userLeaves:leaveCreated._id}});
                res.status(200).json({
                    message:"Leave Application Recieved Successfully!"
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = createLeave;
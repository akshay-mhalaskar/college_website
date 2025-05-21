const leave = require('../Model/leave');

async function approveLeave(req, res) {
    try {
        const { leaveID } = req.params;
        if (!leaveID || leaveID.length !== 24) {
            res.status(401).json({
                message: "Cannot Perform Action! Invalid Leave"
            })
        }
        else {
            const leaveUpdated = await leave.findByIdAndUpdate({ _id: leaveID }, { isLeaveApproved: "Approved" });
            if (leaveUpdated) {
                res.status(200).json({
                    message: "Leave Approved Successfully!"
                })
            }
            else {
                res.status(404).json({
                    message: "Invalid Leave Id!"
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

module.exports = approveLeave;
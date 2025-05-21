const clearance = require('../Model/clearance');

async function rejectClearance(req, res) {
    try {
        const { userID } = req;
        if (!userID || userID.length !== 24) {
            res.status(401).json({
                message: "Invalid User! Please Login Again"
            })
        }
        else {
            const { clearId } = req.params;
            if (!clearId || clearId.length !== 24) {
                res.status(404).json({
                    message: "Invalid Request! Clearance Doesnt Exist"
                })
            }
            else {
                const valueExists = await clearance.findOne({ _id: clearId, clearanceRejectFaculty: userID });
                if (valueExists) {
                    res.status(401).json({
                        message: "You have already taken action!"
                    })
                }
                else {
                    const updatedClearance = await clearance.findByIdAndUpdate({ _id: clearId }, { $push: { clearanceRejectFaculty: userID } });
                    if (!updatedClearance) {
                        res.status(404).json({
                            message: "Invalid Request! Clearance Doesnt Exist"
                        })
                    }
                    else {
                        res.status(200).json({
                            message: "Clearance Rejected Successfully!"
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

module.exports = rejectClearance;
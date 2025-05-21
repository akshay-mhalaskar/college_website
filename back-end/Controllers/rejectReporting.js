const reporting = require('../Model/reporting');

async function rejectReporting(req, res) {
    try {
        const { reportId } = req.params;
        if (!reportId || reportId.length !== 24) {
            res.status(401).json({
                message: "Invalid Request!"
            })
        }
        else {
            const { rejectionMessage } = req.body;
            if (!rejectionMessage) {
                res.status(401).json({
                    message: "Please Include Reason for Rejection!"
                })
            }
            else {
                const updatedReporting = await reporting.findByIdAndUpdate({ _id: reportId }, { isApproved: "Rejected", rejectionMessage: rejectionMessage });
                if (!updatedReporting) {
                    res.status(404).json({
                        message: "Sorry! Cannot Perform the action because Report Doesnt Exist!"
                    })
                }
                else {
                    res.status(200).json({
                        message: "Reporting Status Updated Successfully!"
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

module.exports = rejectReporting;
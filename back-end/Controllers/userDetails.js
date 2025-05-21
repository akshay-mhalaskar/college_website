const user = require('../Model/user');
const reporting = require('../Model/reporting');

async function userDetails(req, res) {
    try {
        const { userID } = req;
        if (!userID || userID.length !== 24) {
            res.status(401).json({
                message: "Invalid User! Login Again"
            })
        }
        else {
            const userSpecDetails = await user.findById({ _id: userID }).populate("reportingData");
            if (!userSpecDetails) {
                res.status(404).json({
                    message: "Sorry! Cannot fetch deatils for non-exisiting user"
                })
            }
            else {
                const reportingStatus = await reporting.findOne({ whoFilled: userID });
                if (!reportingStatus) {
                    userSpecDetails.userPassword = undefined;
                    res.status(200).json({
                        message: "User Details are here",
                        userDet: userSpecDetails
                    })
                }
                else {
                    userSpecDetails.userPassword = undefined;
                    res.status(200).json({
                        message: "User Details are here",
                        userDet: userSpecDetails,
                        reportingUphold:reportingStatus.isApproved
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

module.exports = userDetails;
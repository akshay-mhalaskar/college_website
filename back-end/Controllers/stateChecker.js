const user = require('../Model/user');
const reporting = require('../Model/reporting');

async function checkStatus(req, res) {
    try {
        const { userID } = req;
        if (!userID || userID.length !== 24) {
            res.status(401).json({
                message: "Invalid User! Please Login Again"
            })
        }
        else{
            const userFilledFound = await user.findOne({_id:userID,reportingFilled:true});
            if(userFilledFound){
                const reStatus = await reporting.findOne({whoFilled:userID});
                if(reStatus){
                    res.status(200).json({
                        message:"Approval Status",
                        isApproval:reStatus.isApproved
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

module.exports = checkStatus;
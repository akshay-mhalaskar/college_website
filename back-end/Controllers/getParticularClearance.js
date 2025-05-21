const clearance = require('../Model/clearance');

async function getParticularClearance(req,res){
    try {
        const { userID } = req;
        if (!userID || userID.length !== 24) {
            res.status(401).json({
                message: "Invalid User! Please Login Again"
            })
        }
        else{
            const partClearance = await clearance.findOne({clearanceCreatedBy:userID}).populate("clearanceApproveFaculty").populate("clearanceRejectFaculty");
            if(!partClearance){
                res.status(401).json({
                    message:"Looks Like there was an error!"
                })
            }
            else{
                res.status(200).json({
                    message:"All Clearance data is here",
                    particularClearance:partClearance
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

module.exports = getParticularClearance;
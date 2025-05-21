const clearance = require('../Model/clearance');

async function allClearance(req, res) {
    try {
        const allClearanceData = await clearance.find({});
        res.status(200).json({
            message: "All Clearance data is here",
            allClearances: allClearanceData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Sorry! There was an server-side error"
        })
    }
}

module.exports = allClearance;
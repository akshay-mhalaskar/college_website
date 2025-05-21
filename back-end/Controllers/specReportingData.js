const reporting = require('../Model/reporting');

async function specReportingData(req, res) {
    try {
        const { reportId } = req.params;
        if (!reportId || reportId.length !== 24) {
            res.status(401).json({
                message: "Invalid Request!"
            })
        }
        else {
            const reportDataFound = await reporting.findById({_id:reportId});
            if(!reportDataFound){
                res.status(404).json({
                    message:"Invalid Report! It doesnt Exist"
                })
            }
            else{
                res.status(200).json({
                    message:"Report Data is here",
                    reportingDeatails:reportDataFound
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

module.exports = specReportingData;
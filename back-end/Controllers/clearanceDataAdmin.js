const clearance = require('../Model/clearance');

async function getDataForAdmin(req,res){
    try {
      const { clearId } = req.params;
      if(!clearId || clearId.length !== 24){
        res.status(401).json({
            message:"Invalid Clearance Request!"
        })
      } 
      else{
        const clearSpecData = await clearance.findById({_id:clearId}).populate("clearanceApproveFaculty").populate("clearanceRejectFaculty");
        if(clearSpecData){
            res.status(200).json({
                message:"All Clearance data is here",
                clearSpecified:clearSpecData
            })
        }
        else{
            res.status(404).json({
                message:"Cannot Find the clearance data you looking for!"
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

module.exports = getDataForAdmin;
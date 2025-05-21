const faculty = require('../Model/faculty');
const user = require('../Model/user');

async function getAllLeave(req,res){
    try {
        const { userID } = req;
        if (!userID || userID.length !== 24) {
            res.status(401).json({
                message: "Invalid User! Please Login Again"
            })
        }
        else{
            const facultyFoundForLeave = await faculty.findById({_id:userID});
            if(!facultyFoundForLeave){
                res.status(404).json({
                    message:"Looks like your forgot path! Move back to home"
                })
            }
            else{
                let allLeavesTo = [];
                const allLeavesData = await user.find({facultyAssigned:facultyFoundForLeave.userEmail}).populate({path:"userLeaves",populate:{path:"forStudent"}});
                async function pushAllElement(){
                    try {
                        allLeavesData.forEach((singleLeave)=>{
                            singleLeave.userLeaves.forEach((partLeave)=>{
                                allLeavesTo.push(partLeave);
                            })
                        })
                    } catch (error) {
                        res.status(501).json({
                            message:"There was an error while loading Leaves!"
                        })
                    }
                }
                await pushAllElement();
                res.status(200).json({
                    message:"hey",
                    allLe:allLeavesTo
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

module.exports = getAllLeave;
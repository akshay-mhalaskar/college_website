const faculty = require('../Model/faculty');
const user = require('../Model/user');

async function reportingforFaculty(req,res){
    try {
        const { userID } = req;
        if (!userID || userID.length !== 24) {
            res.status(401).json({
                message: "Invalid User! Please Login Again"
            })
        }
        else{
            const facultyFound = await faculty.findById({_id:userID});
            if(!facultyFound){
                res.status(404).json({
                    message:"Looks like your forgot path! Move back to home"
                })
            }
            else{
                const allResponses = await user.find({reportingFilled:true,facultyAssigned:facultyFound.userEmail});
                res.status(200).json({
                    message:"Faculty Assured Data is here",
                    allStudentsReporting:allResponses
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

module.exports = reportingforFaculty;
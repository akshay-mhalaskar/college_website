const reporting = require('../Model/reporting');

async function updateReporting(req,res){
    try {
        const { reportId } = req.params;
        if (!reportId || reportId.length !== 24) {
            res.status(401).json({
                message: "Invalid Request!"
            })
        }
        else{
            const { userClass, userDiv, userRoll, userBranch, userGR, userAdmission, userFullName, userPrevious, userPrevBranch, userUniversity, userPrevCollege, userYearPassing, userJEEMarks, userCETMarks, userPCM, userDiplomaScore, userDOB, userMobile, userEmail, userPhysical, userHostel, userEBC, userDateJoining, userReligion, userCategory, userGender, userBlood, userMother, userFather, userFatherOccupation, userParentMobile, userParentShri, userParentAt, userParentPost, userParentTal, userParentDist, userParentState, userParentPincode, userParentDob, userEnrolledVoter, userVoterId, userAadhar, userParentCorrespondence } = req.body;
            if (!userClass || !userDiv || !userRoll || !userBranch || !userGR || !userAdmission || !userFullName || !userPrevious || !userPrevBranch || !userUniversity || !userPrevCollege || !userYearPassing || !userJEEMarks || !userCETMarks || !userPCM || !userDiplomaScore || !userDOB || !userMobile || !userEmail || !userPhysical || !userHostel || !userEBC || !userDateJoining || !userReligion || !userCategory || !userGender || !userBlood || !userMother || !userFather || !userFatherOccupation || !userParentMobile || !userParentShri || !userParentAt || !userParentPost || !userParentTal || !userParentDist || !userParentState || !userParentPincode || !userParentDob || !userEnrolledVoter || !userVoterId || !userAadhar || !userParentCorrespondence) {
                res.status(401).json({
                    message: "Please Include All Fields to increase your Acceptance rate"
                })
            }
            else {
                const reportingUpdate = await reporting.findByIdAndUpdate({_id:reportId},{ userClass: userClass, userDiv: userDiv, userRoll: userRoll, userBranch: userBranch, userGR: userGR, userAdmission: userAdmission, userFullName: userFullName, userPrevious: userPrevious, userPrevBranch: userPrevBranch, userUniversity: userUniversity, userPrevCollege: userPrevCollege, userYearPassing: userYearPassing, userJEEMarks: userJEEMarks, userCETMarks: userCETMarks, userPCM: userPCM, userDiplomaScore: userDiplomaScore, userDOB: userDOB, userMobile: userMobile, userEmail: userEmail, userPhysical: userPhysical, userHostel: userHostel, userEBC: userEBC, userDateJoining: userDateJoining, userReligion: userReligion, userCategory: userCategory, userGender: userGender, userBlood: userBlood, userMother: userMother, userFather: userFather, userFatherOccupation: userFatherOccupation, userParentMobile: userParentMobile, userParentShri: userParentShri, userParentAt: userParentAt, userParentPost: userParentPost, userParentTal: userParentTal, userParentDist: userParentDist, userParentState: userParentState, userParentPincode: userParentPincode, userParentDob: userParentDob, userEnrolledVoter: userEnrolledVoter, userVoterId: userVoterId, userAadhar: userAadhar, userParentCorrespondence: userParentCorrespondence, isApproved:"Pending"});
                if(!reportingUpdate){
                    res.status(404).json({
                        message:"Cannot Update an non-existing Reporting"
                    })
                }
                else{
                    res.status(200).json({
                        message:"Reporting Updated Successfully!"
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

module.exports = updateReporting;
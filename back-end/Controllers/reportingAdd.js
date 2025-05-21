const reporting = require('../Model/reporting');
const user = require('../Model/user');

async function reportingAdd(req, res) {
    try {
        const { userID } = req;
        if (!userID || userID.length !== 24) {
            res.status(401).json({
                message: "Invalid User! Please Login Again"
            })
        }
        else {
            const { userClass, userDiv, userRoll, userBranch, userGR, userAdmission, userFullName, userPrevious, userPrevBranch, userUniversity, userPrevCollege, userYearPassing, userJEEMarks, userCETMarks, userPCM, userDiplomaScore, userDOB, userMobile, userEmail, userPhysical, userHostel, userEBC, userDateJoining, userReligion, userCategory, userGender, userBlood, userMother, userFather, userFatherOccupation, userParentMobile, userParentShri, userParentAt, userParentPost, userParentTal, userParentDist, userParentState, userParentPincode, userParentDob, userEnrolledVoter, userVoterId, userAadhar, userParentCorrespondence } = req.body;
             if (userClass || userDiv || userRoll || userBranch || userGR || userAdmission || userFullName || userPrevious || userPrevBranch || userUniversity || !userPrevCollege || !userYearPassing || !userJEEMarks || !userCETMarks || !userPCM || !userDiplomaScore || !userDOB || userMobile || userEmail || userPhysical || userHostel || userEBC || userDateJoining || userReligion || userCategory || userGender || userBlood || userMother || userFather || userFatherOccupation || userParentMobile || userParentShri || userParentAt || userParentPost || userParentTal || userParentDist || userParentState || userParentPincode || userParentDob || userEnrolledVoter || userVoterId || userAadhar || userParentCorrespondence) {
                 const reportingCreated = await reporting.create({ userClass: userClass, userDiv: userDiv, userRoll: userRoll, userBranch: userBranch, userGR: userGR, userAdmission: userAdmission, userFullName: userFullName, userPrevious: userPrevious, userPrevBranch: userPrevBranch, userUniversity: userUniversity, userPrevCollege: userPrevCollege, userYearPassing: userYearPassing, userJEEMarks: userJEEMarks, userCETMarks: userCETMarks, userPCM: userPCM, userDiplomaScore: userDiplomaScore, userDOB: userDOB, userMobile: userMobile, userEmail: userEmail, userPhysical: userPhysical, userHostel: userHostel, userEBC: userEBC, userDateJoining: userDateJoining, userReligion: userReligion, userCategory: userCategory, userGender: userGender, userBlood: userBlood, userMother: userMother, userFather: userFather, userFatherOccupation: userFatherOccupation, userParentMobile: userParentMobile, userParentShri: userParentShri, userParentAt: userParentAt, userParentPost: userParentPost, userParentTal: userParentTal, userParentDist: userParentDist, userParentState: userParentState, userParentPincode: userParentPincode, userParentDob: userParentDob, userEnrolledVoter: userEnrolledVoter, userVoterId: userVoterId, userAadhar: userAadhar, userParentCorrespondence: userParentCorrespondence, whoFilled: userID });
                await user.findByIdAndUpdate({ _id: userID }, { reportingFilled: true, reportingData: reportingCreated._id });
                res.status(200).json({
                    message: "Reporting Form Created! Wait for Faculty Approval"
                })
               
            }
            else {
                res.status(401).json({
                    message: "Please Include All Fields to increase your Acceptance rate"
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

module.exports = reportingAdd;

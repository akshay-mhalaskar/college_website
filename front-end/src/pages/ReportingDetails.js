import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ReportingDetails() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [reportingDetailsFor, setReportingDetailsFor] = useState({
        userClass: "",
        userDiv: "",
        userRoll: "",
        userBranch: "",
        userGR: "",
        userAdmission: "",
        userFullName: "",
        userPrevious: "",
        userPrevBranch: "",
        userUniversity: "",
        userPrevCollege: "",
        userYearPassing: "",
        userJEEMarks: "",
        userCETMarks: "",
        userPCM: "",
        userDiplomaScore: "",
        userDOB: "",
        userMobile: "",
        userEmail: "",
        userPhysical: "",
        userHostel: "",
        userEBC: "",
        userDateJoining: "",
        userReligion: "",
        userCategory: "",
        userGender: "",
        userBlood: "",
        userMother: "",
        userFather: "",
        userFatherOccupation: "",
        userParentMobile: "",
        userParentShri: "",
        userParentAt: "",
        userParentPost: "",
        userParentTal: "",
        userParentDist: "",
        userParentState: "",
        userParentPincode: "",
        userParentDob: "",
        userEnrolledVoter: "",
        userVoterId: "",
        userAadhar: "",
        userParentCorrespondence: ""
    });
    const [approval, setApproval] = useState("Pending");
    const [rejectReason, setRejectReason] = useState("");
    async function userFilledDetails() {
        const token = localStorage.getItem('myToken');
        try {
            const respUserDetails = await axios.get(`http://localhost:4000/api/v1/reportDetails/${path}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respUserDetails.data) {
                setReportingDetailsFor({
                    userClass: respUserDetails.data.reportingDeatails.userClass,
                    userDiv: respUserDetails.data.reportingDeatails.userDiv,
                    userRoll: respUserDetails.data.reportingDeatails.userRoll,
                    userBranch: respUserDetails.data.reportingDeatails.userBranch,
                    userGR: respUserDetails.data.reportingDeatails.userGR,
                    userAdmission: respUserDetails.data.reportingDeatails.userAdmission,
                    userFullName: respUserDetails.data.reportingDeatails.userFullName,
                    userPrevious: respUserDetails.data.reportingDeatails.userPrevious,
                    userPrevBranch: respUserDetails.data.reportingDeatails.userPrevBranch,
                    userUniversity: respUserDetails.data.reportingDeatails.userUniversity,
                    userPrevCollege: respUserDetails.data.reportingDeatails.userPrevCollege,
                    userYearPassing: respUserDetails.data.reportingDeatails.userYearPassing,
                    userJEEMarks: respUserDetails.data.reportingDeatails.userJEEMarks,
                    userCETMarks: respUserDetails.data.reportingDeatails.userCETMarks,
                    userPCM: respUserDetails.data.reportingDeatails.userPCM,
                    userDiplomaScore: respUserDetails.data.reportingDeatails.userDiplomaScore,
                    userDOB: respUserDetails.data.reportingDeatails.userDOB,
                    userMobile: respUserDetails.data.reportingDeatails.userMobile,
                    userEmail: respUserDetails.data.reportingDeatails.userEmail,
                    userPhysical: respUserDetails.data.reportingDeatails.userPhysical,
                    userHostel: respUserDetails.data.reportingDeatails.userHostel,
                    userEBC: respUserDetails.data.reportingDeatails.userEBC,
                    userDateJoining: respUserDetails.data.reportingDeatails.userDateJoining,
                    userReligion: respUserDetails.data.reportingDeatails.userReligion,
                    userCategory: respUserDetails.data.reportingDeatails.userCategory,
                    userGender: respUserDetails.data.reportingDeatails.userGender,
                    userBlood: respUserDetails.data.reportingDeatails.userBlood,
                    userMother: respUserDetails.data.reportingDeatails.userMother,
                    userFather: respUserDetails.data.reportingDeatails.userFather,
                    userFatherOccupation: respUserDetails.data.reportingDeatails.userFatherOccupation,
                    userParentMobile: respUserDetails.data.reportingDeatails.userParentMobile,
                    userParentShri: respUserDetails.data.reportingDeatails.userParentShri,
                    userParentAt: respUserDetails.data.reportingDeatails.userParentAt,
                    userParentPost: respUserDetails.data.reportingDeatails.userParentPost,
                    userParentTal: respUserDetails.data.reportingDeatails.userParentTal,
                    userParentDist: respUserDetails.data.reportingDeatails.userParentDist,
                    userParentState: respUserDetails.data.reportingDeatails.userParentState,
                    userParentPincode: respUserDetails.data.reportingDeatails.userParentPincode,
                    userParentDob: respUserDetails.data.reportingDeatails.userParentDob,
                    userEnrolledVoter: respUserDetails.data.reportingDeatails.userEnrolledVoter,
                    userVoterId: respUserDetails.data.reportingDeatails.userVoterId,
                    userAadhar: respUserDetails.data.reportingDeatails.userAadhar,
                    userParentCorrespondence: respUserDetails.data.reportingDeatails.userParentCorrespondence
                });
                setApproval(respUserDetails.data.reportingDeatails.isApproved);
            }
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }
    async function updateReportingstatusA(reportId) {
        const token = localStorage.getItem('myToken');
        try {
            const respUpdatedReportingA = await axios.get(`http://localhost:4000/api/v1/approveReport/${reportId}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respUpdatedReportingA.data) {
                toast.success(respUpdatedReportingA.data.message);
            }
            userFilledDetails();
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }
    async function updateReportingstatusR(reportId) {
        console.log(reportId);
        const token = localStorage.getItem('myToken');
        try {
            const respUpdatedReportingR = await axios.post(`http://localhost:4000/api/v1/rejectReport/${reportId}`, {
                rejectionMessage: rejectReason
            }, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respUpdatedReportingR.data) {
                toast.success(respUpdatedReportingR.data.message);
            }
            userFilledDetails();
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }
    useEffect(() => {
        userFilledDetails();
    }, [path]);
    return (
        <>
            <Header />
            <div className="container">
                <h2 className='text-center m-4' style={{ color: "#1463f3" }}>Reporting Form Approval:</h2><hr className='fw-bold border border-dark  mb-5' />
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Admission required to:</label>
                </div>
                <label className="col-sm-2 col-form-label">Class:</label>
                <input className="form-control" type="text" value={reportingDetailsFor.userClass} aria-label="readonly input example" readonly />
                <label className="col-sm-2 col-form-label">Division:</label>
                <input className="form-control" type="text" value={reportingDetailsFor.userDiv} aria-label="readonly input example" readonly />
                <div className="mb-3 row">
                    <label className="col-sm-2 mt-3 col-form-label">Roll No.:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control mt-3" id="userRoll" value={reportingDetailsFor.userRoll} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Branch:</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" value="ECE" aria-label="readonly input example" readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">GR No.::</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id='userGR' value={reportingDetailsFor.userGR} readOnly />
                    </div>
                </div>
                <div className='row'>
                    <div className="mb-3 col-lg-2">
                        <label className="col-form-label">Admission type:</label>
                        <input className="form-control" value={reportingDetailsFor.userAdmission} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Full Name of Student (Start with Surname):</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userFullName} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Previous Class:</label>
                    <input className="form-control" value={reportingDetailsFor.userPrevious} readOnly />
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Previous Branch:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userPrevBranch} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Name of University/Board:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userUniversity} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Name of Previous College:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userPrevCollege} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Year of Passing:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userYearPassing} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-12 col-form-label">Marks(Qualifying Examination):</label>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">JEE:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userJEEMarks} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">CET:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userCETMarks} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">PCM Group:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userPCM} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Diploma:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userDiplomaScore} readOnly />
                    </div>
                </div>
                <div className='d-flex flex-row'>
                    <div className="mb-3 row">
                        <label className="col-sm-6 col-form-label">Date of Birth:</label>
                        <div className="col-sm-10">
                            <input className="form-control" value={reportingDetailsFor.userDOB} readOnly />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-6 col-form-label">Student Mobile No.:</label>
                        <div className="col-sm-10">
                            <input className="form-control" value={reportingDetailsFor.userMobile} readOnly />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-6 col-form-label">Student Email Id:</label>
                        <div className="col-sm-10">
                            <input className="form-control" value={reportingDetailsFor.userEmail} readOnly />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='d-flex flex-row'>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Physical Handicap:</label>
                                <input className="form-control" value={reportingDetailsFor.userPhysical} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='d-flex flex-row'>
                            <div className="mb-3 row">
                                <label className="col-sm-2 me-3 col-form-label">Hostel:</label>
                                <input className="form-control" value={reportingDetailsFor.userHostel} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='d-flex flex-row'>
                            <div className="mb-3 row">
                                <label className="col-sm-2 me-3 col-form-label">EBC:</label>
                                <input className="form-control" value={reportingDetailsFor.userEBC} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Date of Joining:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userDateJoining} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Religion:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userReligion} readOnly />
                    </div>
                </div>
                {/* <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Caste:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" />
                    </div>
                </div> */}
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Category:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userCategory} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Gender(Male/Female):</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userGender} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Blood Group:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userBlood} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Mother's Name:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userMother} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Father's Name:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userFather} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Father's Occupation:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userFatherOccupation} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Parent's Mobile No.:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userParentMobile} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-12 col-form-label">Parent's Permanent/Correspondence Address with Pincode:</label>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Shri:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userParentShri} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">At:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userParentAt} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Post:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userParentPost} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Tal:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userParentTal} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Dist.:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userParentDist} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">State:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userParentState} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Pincode:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userParentPincode} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Father/Mother Birth Date:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userParentDob} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="mb-3 row">
                        <label className="col-sm-12 col-form-label">Whether Enrolled Name in Electoral Voter List (Yes/No). If Yes Voter ID No.:</label>
                    </div>
                    <div className="col-sm-12">
                        <input className="form-control" value={reportingDetailsFor.userVoterId} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Student Aadhar No.:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={reportingDetailsFor.userAadhar} readOnly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="mb-3 row">
                        <label className="col-sm-12 col-form-label">Parents Address for Correspondence in Capital Letter:</label>
                    </div>
                    <div className="col-sm-12">
                        <input className="form-control" value={reportingDetailsFor.userParentCorrespondence} readOnly />
                    </div>
                </div>
                {
                    approval === "Pending" ? (<div><button className="btn btn-success me-5 mb-5" onClick={() => { updateReportingstatusA(path) }}>Approve!</button><button type="button" className="btn btn-danger mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Reject!
                    </button></div>) : (<div className="my-5 text-center"><h4 className="border border-dark py-3 bg-dark text-light" style={{ borderRadius: "10px" }}>This Application is {approval}!</h4></div>)
                }
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Enter The Reason for Rejection!</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control" id='rejectionMessage' value={rejectReason} onChange={(e) => { setRejectReason(e.target.value) }} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { updateReportingstatusR(path) }}>Reject</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}
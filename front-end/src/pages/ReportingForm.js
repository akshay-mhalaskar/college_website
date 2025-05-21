import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function ReportingForm() {
    const navigate = useNavigate();
    const [reportingDetails, setReportingDetails] = useState({
        userClass: "FY",
        userDiv: "A",
        userRoll: "",
        userBranch: "ECE",
        userGR: "",
        userAdmission: "",
        userFullName: "",
        userPrevious: "12th",
        userPrevBranch: "",
        userUniversity: "",
        userPrevCollege: "",
        userYearPassing: "2023",
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
        userReligion: "Hindu",
        userCategory: "Gen",
        userGender: "Male",
        userBlood: "O+",
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
        userEnrolledVoter: "Yes",
        userVoterId: "",
        userAadhar: "",
        userParentCorrespondence: ""
    });

    function monitorReporting(event) {
        setReportingDetails((prev) => ({
            ...prev, [event.target.id]: event.target.value
        }))
    }
    async function reportingFormSubmit() {
        const token = localStorage.getItem('myToken');
        try {
            const respReporting = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/reportAdd`, reportingDetails, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respReporting.data) {
                toast.success(respReporting.data.message);
            }
            navigate("/");
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }
    return (
        <>
            <Header />
            <div className='container'>
                <h2 className='text-center m-4' style={{ color: "#1463f3" }}>Reporting Form</h2><hr className='fw-bold border border-dark  mb-5' />
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Admission required to:</label>
                </div>
                <label className="col-sm-2 col-form-label">Class:</label>
                <select className="form-select" aria-label="Default select example" id='userClass' onChange={monitorReporting}>
                    <option value="FY" selected>FY</option>
                    <option value="SY">SY</option>
                    <option value="TY">TY</option>
                    <option value="BTECH">BTECH</option>
                </select>
                <label className="col-sm-2 col-form-label">Division:</label>
                <select className="form-select" aria-label="Default select example" id='userDiv' onChange={monitorReporting}>
                    <option value="A" selected>A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label mt-3">Roll No.:</label>
                    <div className="col-sm-10">
                        <input className="form-control mt-3" type="number" id="userRoll" value={reportingDetails.userRoll} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Branch:</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" value="ECE" aria-label="readonly input example" readonly />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">GR No.::</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id='userGR' value={reportingDetails.userGR} onChange={monitorReporting} />
                    </div>
                </div>
                <div className='row'>
                    <div className="mb-3 col-lg-2">
                        <label className="col-form-label">Admission type:</label>
                    </div>
                    <div className='col-lg-10 col-sm-12 d-flex felx-row'>
                        <div className="form-check me-5 mt-2">
                            <input value="TFWS" type="radio" name="userAdmission" id="userAdmission" onChange={monitorReporting} />
                            <label className="form-check-label" for="flexRadioDefault1">
                                TFWS
                            </label>
                        </div>
                        <div className="form-check me-5 mt-2">
                            <input value="Management" type="radio" name="userAdmission" id="userAdmission" onChange={monitorReporting} />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Management
                            </label>
                        </div>
                        <div className="form-check me-5 mt-2">
                            <input value="CAP" type="radio" name="userAdmission" id="userAdmission" onChange={monitorReporting} />
                            <label className="form-check-label" for="flexRadioDefault3">
                                CAP Round
                            </label>
                        </div>
                        <div className="form-check me-5 mt-2">
                            <input value="Regular" type="radio" name="userAdmission" id="userAdmission" onChange={monitorReporting} />
                            <label className="form-check-label" for="flexRadioDefault4">
                                Regular
                            </label>
                        </div>
                        <div className="form-check me-5 mt-2">
                            <input value="Other" type="radio" name="flexRadioDefault" id="userAdmission" onChange={monitorReporting} />
                            <label className="form-check-label" for="flexRadioDefault5">
                                Other
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Full Name of Student (Start with Surname):</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userFullName' value={reportingDetails.userFullName} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Previous Class:</label>
                    <div className="col-sm-10">
                        <select className="form-select" aria-label="Default select example" id='userPrevious' onChange={monitorReporting}>
                            <option value="12th" selected>12th</option>
                            <option value="Diploma">Diploma</option>
                            <option value="FY">FY</option>
                            <option value="SY">SY</option>
                            <option value="TY">TY</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Previous Branch:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userPrevBranch' value={reportingDetails.userPrevBranch} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Name of University/Board:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userUniversity' value={reportingDetails.userUniversity} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Name of Previous College:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userPrevCollege' value={reportingDetails.userPrevCollege} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Year of Passing:</label>
                    <div className="col-sm-10">
                        <select className="form-select" aria-label="Default select example" id='userYearPassing' onChange={monitorReporting}>
                            <option value="2011" selected>2011</option>
                            <option value="2012" selected>2012</option>
                            <option value="2013" selected>2013</option>
                            <option value="2013" selected>2014</option>
                            <option value="2013" selected>2015</option>
                            <option value="2013" selected>2016</option>
                            <option value="2013" selected>2017</option>
                            <option value="2013" selected>2018</option>
                            <option value="2013" selected>2019</option>
                            <option value="2013" selected>2020</option>
                            <option value="2013" selected>2021</option>
                            <option value="2013" selected>2022</option>
                            <option value="2013" selected>2023</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-12 col-form-label">Marks(Qualifying Examination):</label>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">JEE:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id='userJEEMarks' value={reportingDetails.userJEEMarks} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">CET:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id='userCETMarks' value={reportingDetails.userCETMarks} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">PCM Group:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id='userPCM' value={reportingDetails.userPCM} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Diploma:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id='userDiplomaScore' value={reportingDetails.userDiplomaScore} onChange={monitorReporting} />
                    </div>
                </div>
                <div className='d-flex flex-row'>
                    <div className="mb-3 row">
                        <label className="col-sm-6 col-form-label">Date of Birth:</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id='userDOB' value={reportingDetails.userDOB} onChange={monitorReporting} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-6 col-form-label">Student Mobile No.:</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id='userMobile' value={reportingDetails.userMobile} onChange={monitorReporting} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-6 col-form-label">Student Email Id:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id='userEmail' value={reportingDetails.userEmail} onChange={monitorReporting} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='d-flex flex-row'>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Physical Handicap:</label>
                            </div>
                            <div className="form-check me-5 mt-2">
                                <input className="form-check-input" name='userPhysical' type="radio" id="userPhysical" value="Yes" onChange={monitorReporting} />
                                <label className="form-check-label" for="flexRadioDefault6">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check me-5 mt-2">
                                <input className="form-check-input" name='userPhysical' type="radio" id="userPhysical" value="No" onChange={monitorReporting} />
                                <label className="form-check-label" for="flexRadioDefault7">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='d-flex flex-row'>
                            <div className="mb-3 row">
                                <label className="col-sm-2 me-3 col-form-label">Hostel:</label>
                            </div>
                            <div className="form-check me-5 mt-2">
                                <input className="form-check-input" name='userHostel' type="radio" id="userHostel" value="Yes" onChange={monitorReporting} />
                                <label className="form-check-label" for="flexRadioDefault8">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check me-5 mt-2">
                                <input className="form-check-input" name='userHostel' type="radio" id="userHostel" value="No" onChange={monitorReporting} />
                                <label className="form-check-label" for="flexRadioDefault9">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='d-flex flex-row'>
                            <div className="mb-3 row">
                                <label className="col-sm-2 me-3 col-form-label">EBC:</label>
                            </div>
                            <div className="form-check me-5 mt-2">
                                <input className="form-check-input" name='userEBC' type="radio" id="userEBC" value="Yes" onChange={monitorReporting} />
                                <label className="form-check-label" for="flexRadioDefault10">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check me-5 mt-2">
                                <input className="form-check-input" name='userEBC' type="radio" id="userEBC" value="No" onChange={monitorReporting} />
                                <label className="form-check-label" for="flexRadioDefault11">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Date of Joining:</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id='userDateJoining' value={reportingDetails.userDateJoining} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Religion:</label>
                    <div className="col-sm-10">
                        <select className="form-select" aria-label="Default select example" id='userReligion' onChange={monitorReporting}>
                            <option value="Hindu" selected>Hindu</option>
                            <option value="Muslim">Muslim</option>
                            <option value="Jain">Jain</option>
                            <option value="Christain">Christain</option>
                            <option value="Sikh">Sikh</option>
                            <option value="Other">Other</option>
                        </select>
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
                        <select className="form-select" aria-label="Default select example" id='userCategory' onChange={monitorReporting}>
                            <option value="Gen" selected>General</option>
                            <option value="Obc">Obc</option>
                            <option value="St">ST</option>
                            <option value="Sc">SC</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Gender(Male/Female):</label>
                    <div className="col-sm-10">
                        <select className="form-select" aria-label="Default select example" id='userGender' onChange={monitorReporting}>
                            <option value="Male" selected>Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Blood Group:</label>
                    <div className="col-sm-10">
                        <select className="form-select" aria-label="Default select example" id='userBlood' onChange={monitorReporting}>
                            <option value="O+" selected>O+</option>
                            <option value="O-">O-</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Mother's Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userMother' value={reportingDetails.userMother} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Father's Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userFather' value={reportingDetails.userFather} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Father's Occupation:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userFatherOccupation' value={reportingDetails.userFatherOccupation} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Parent's Mobile No.:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id='userParentMobile' value={reportingDetails.userParentMobile} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-12 col-form-label">Parent's Permanent/Correspondence Address with Pincode:</label>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Shri:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userParentShri' value={reportingDetails.userParentShri} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">At:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userParentAt' value={reportingDetails.userParentAt} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Post:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userParentPost' value={reportingDetails.userParentPost} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Tal:</label>
                    <div className="col-sm-10">
                        <input type="tel" className="form-control" id='userParentTal' value={reportingDetails.userParentTal} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Dist.:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userParentDist' value={reportingDetails.userParentDist} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">State:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='userParentState' value={reportingDetails.userParentState} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Pincode:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id='userParentPincode' value={reportingDetails.userParentPincode} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Father/Mother Birth Date:</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id='userParentDob' value={reportingDetails.userParentDob} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="mb-3 row">
                        <label className="col-sm-12 col-form-label">Whether Enrolled Name in Electoral Voter List (Yes/No). If Yes Voter ID No.:</label>
                    </div>
                    <div className="col-sm-12">
                        <input type="number" className="form-control" id='userVoterId' value={reportingDetails.userVoterId} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Student Aadhar No.:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id='userAadhar' value={reportingDetails.userAadhar} onChange={monitorReporting} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="mb-3 row">
                        <label className="col-sm-12 col-form-label">Parents Address for Correspondence in Capital Letter:</label>
                    </div>
                    <div className="col-sm-12">
                        <input type="text" className="form-control" id='userParentCorrespondence' value={reportingDetails.userParentCorrespondence} onChange={monitorReporting} />
                    </div>
                </div>
                <button className='btn btn-primary' onClick={reportingFormSubmit}>Submit</button>
            </div>
            <Footer />
        </>
    )
}

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState({
        userEmail: "",
        userPassword: ""
    })
    function monitorLogin(event) {
        setLoginUser((prev) => ({
            ...prev, [event.target.id]: event.target.value
        }))
    }

    async function loginStudent() {
        try {
            const respStudent = await axios.post('http://localhost:4000/api/v1/studentLogin', loginUser);
            if (respStudent.data) {
                localStorage.setItem("myToken", respStudent.data.userToken);
                localStorage.setItem("isFaculty", false);
                toast.success(respStudent.data.message);
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
    async function loginFaculty() {
        try {
            const respFaculty = await axios.post('http://localhost:4000/api/v1/facultyLogin', loginUser);
            if (respFaculty.data) {
                localStorage.setItem("myToken", respFaculty.data.userToken);
                localStorage.setItem("isFaculty", true);
                localStorage.setItem("myId", respFaculty.data.facultyID);
                localStorage.setItem("isAdmin", respFaculty.data.isAdmin);
                toast.success(respFaculty.data.message);
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
            <div className='container p-5'>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Student Login</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Faculty Login</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div className='m-5 pb-5'>
                            <div className="mb-3 row">
                                <label htmlFor="userEmail" className="col-sm-2 col-form-label">Username:</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="userEmail" onChange={monitorLogin} value={loginUser.userEmail} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="userPassword" className="col-sm-2 col-form-label">Password:</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="userPassword" onChange={monitorLogin} value={loginUser.userPassword} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-4" onClick={loginStudent}>Submit</button>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div className='m-5 pb-5'>
                            <div className="mb-3 row">
                                <label htmlFor="userEmail" className="col-sm-2 col-form-label">Username:</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="userEmail" onChange={monitorLogin} value={loginUser.userEmail} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="userPassword" className="col-sm-2 col-form-label">Password:</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="userPassword" onChange={monitorLogin} value={loginUser.userPassword} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-4" onClick={loginFaculty}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

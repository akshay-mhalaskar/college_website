import React, { useEffect, useState } from 'react';
import logo from '../images/logo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import toast from 'react-hot-toast';
import '../stylesheets/Header.css'

export default function Header() {
    let token = localStorage.getItem('myToken');
    let isFaculty = localStorage.getItem('isFaculty');
    let adminSet = localStorage.getItem("isAdmin");
    const navigate = useNavigate();
    const [approvStat, setApprovStat] = useState("");
    function logMeOut() {
        localStorage.clear();
        navigate('/login');
    }
    function getToken() {
        token = localStorage.getItem('myToken');
        isFaculty = localStorage.getItem('isFaculty');
        adminSet = localStorage.getItem("isAdmin");
    }
    async function getApproveStatus() {
        const token = localStorage.getItem('myToken');
        try {
            const respApproval = await axios.get('http://localhost:4000/api/v1/getStatus', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respApproval.data) {
                setApprovStat(respApproval.data.isApproval);
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
    useEffect(() => {
        getToken();
        if (isFaculty === "false") {
            getApproveStatus();
        }
    }, [isFaculty]);
    return (
        <>
            <nav className="navbar" style={{ backgroundColor: "#84a4fc" }}>
                <div className="container justify-content-center px-5 py-2" >
                    <img src={logo} alt='alt' className='header-image' />
                </div>
            </nav>
            <ul className="nav justify-content-center py-2" style={{ backgroundColor: "#1463f3" }}>
                <li className="nav-item">
                    <Link to='/' className="nav-link fs-5" style={{ textDecoration: "none", color: "white" }}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/faculty' className="nav-link fs-5" style={{ textDecoration: "none", color: "white" }}>Faculty</Link>
                </li>
                <li className="nav-item">
                    <Link to='/laboratory' className="nav-link fs-5" style={{ textDecoration: "none", color: "white" }}>Laboratory</Link>
                </li>
                <li className="nav-item">
                    <Link to='/placements' className="nav-link fs-5" style={{ textDecoration: "none", color: "white" }}>Placements & Achievements</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contactus' className="nav-link fs-5" style={{ textDecoration: "none", color: "white" }}>Contact Us</Link>
                </li>
                <li className="nav-item">
                    {
                        !token ? (<Link to='/login' className="nav-link fs-5" style={{ textDecoration: "none", color: "white" }}>Login</Link>) : (isFaculty === "true" ? (<div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle bg-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaUser className='text-light' />
                            </button>
                            <ul className="dropdown-menu">
                                <Link to='/allReportings'>
                                    <button type="button" className="btn btn-primary position-relative my-2 mx-2" style={{ width: "88%" }}>
                                        Reporting Forms
                                    </button>
                                </Link>
                                <Link to='/allClearance'>
                                    <button type="button" className="btn btn-primary position-relative my-2 mx-2" style={{ width: "88%" }}>
                                        Clearance Form
                                    </button>
                                </Link>
                                <Link to='/allLeaves'>
                                    <button type="button" className="btn btn-primary position-relative my-2 mx-2" style={{ width: "88%" }}>
                                        Leave Form
                                    </button>
                                </Link>
                                <Link to='/adminClearance'>
                                    <button type="button" className={adminSet === "true" ? "btn btn-primary position-relative my-2 mx-2" : "d-none"} style={{ width: "88%" }}>
                                        All Clearance
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-primary position-relative my-2 mx-2" style={{ width: "88%" }} onClick={logMeOut}>
                                    Log Out
                                </button>
                            </ul>
                        </div>) : (<div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle bg-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaUser className='text-light' />
                            </button>
                            <ul className="dropdown-menu">
                                <Link to='/reporting'>
                                    <button type="button" className="btn btn-primary position-relative my-2 mx-2" style={{ width: "88%" }}>
                                        Reporting Form
                                        <span className={approvStat === "" ? ("d-none") : (approvStat === "Pending" ? ("position-absolute top-0 start-100 translate-middle p-2 bg-warning border border-light rounded-circle") : (approvStat === "Rejected" ? ("position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle") : ("position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle")))}>
                                        </span>
                                    </button>
                                </Link>
                                <Link to='/clearanceform'>
                                    <button type="button" className="btn btn-primary position-relative my-2 mx-2" style={{ width: "88%" }}>
                                        Clearance Form
                                    </button>
                                </Link>
                                <Link to='/leaveGrant'>
                                    <button type="button" className="btn btn-primary position-relative my-2 mx-2" style={{ width: "88%" }}>
                                        Leave Form
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-primary position-relative my-2 mx-2" style={{ width: "88%" }} onClick={logMeOut}>
                                    Log Out
                                </button>
                            </ul>
                        </div>))
                    }
                </li>
            </ul>
        </>
    )
}
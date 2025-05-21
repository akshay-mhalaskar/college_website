import React, { useEffect, useState } from "react";
import ReportingForm from "./ReportingForm";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReportingDefaultUser from "./ReportingDetailUser";
import { FaRegEdit } from "react-icons/fa";

export default function ReportingTable() {
    const [alreadyFilled, setAlreadyFilled] = useState(false);
    const [approvalReq, setApprovalReq] = useState("Pending");
    const [rejectionCause, setRejectionCause] = useState("");
    async function userReportingDetails() {
        const token = localStorage.getItem('myToken');
        try {
            const respReportingDetails = await axios.get('http://localhost:4000/api/v1/userdetails', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respReportingDetails.data) {
                setAlreadyFilled(respReportingDetails.data.userDet.reportingFilled);
                setApprovalReq(respReportingDetails.data.reportingUphold);
                setRejectionCause(respReportingDetails.data.userDet.reportingData.rejectionMessage);
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
        userReportingDetails();
    }, []);
    if (alreadyFilled === true) {
        if(approvalReq === "Rejected"){
            return (
                <>
                    <Header />
                    <div className="container" style={{ height: "70vh" }}>
                        <h2 className='text-center m-4' style={{ color: "#1463f3" }}>Reporting Form Result:</h2><hr className='fw-bold border border-dark  mb-5' />
                        <div className="card my-5">
                            <div className="card-header">
                                You have already filled the Form!
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Your Form State will be shown here:</h5>
                                {
                                    approvalReq === "Pending" ? (<button className="btn btn-warning">Pending...</button>) : approvalReq === "Approved" ? (<button className="btn btn-success">Approved!</button>) : (<><div className="alert alert-danger" role="alert">Faculty Message For Rejection - <span className="fw-bolder">{rejectionCause}</span></div><button className="btn btn-danger me-2">Rejected!</button><a href="#reportingAlready"><button className="btn btn-primary">Edit Form<FaRegEdit className="ps-2 pb-1 fs-5" /></button></a></>)
                                }
                            </div>
                        </div>
                    </div>
                    <div id="reportingAlready">
                    <ReportingDefaultUser/>
                    </div>
                    <Footer />
                </>
            )
        }
        else{
            return (
                <>
                    <Header />
                    <div className="container" style={{ height: "70vh" }}>
                        <h2 className='text-center m-4' style={{ color: "#1463f3" }}>Reporting Form Result:</h2><hr className='fw-bold border border-dark  mb-5' />
                        <div className="card my-5">
                            <div className="card-header">
                                You have already filled the Form!
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Your Form State will be shown here:</h5>
                                {
                                    approvalReq === "Pending" ? (<button className="btn btn-warning">Pending...</button>) : approvalReq === "Approved" ? (<button className="btn btn-success">Approved!</button>) : (<><div className="alert alert-danger" role="alert">Faculty Message For Rejection - <span className="fw-bolder">{rejectionCause}</span></div><button className="btn btn-danger me-2">Rejected!</button><button className="btn btn-primary">Edit Form<FaRegEdit className="ps-2 pb-1 fs-5" /></button></>)
                                }
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )
        }
    }
    else {
        return (<ReportingForm />)
    }
}
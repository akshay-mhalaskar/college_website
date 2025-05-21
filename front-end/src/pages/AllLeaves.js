import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AllLeaves() {
    const [allLeavesStudent, setAllLeaveStudent] = useState([]);

    async function getAllLeaveData() {
        const token = localStorage.getItem('myToken');
        try {
            const respAllLeaves = await axios.get('http://localhost:4000/api/v1/allLeaves', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respAllLeaves.data) {
                setAllLeaveStudent(respAllLeaves.data.allLe);
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
    async function approveLeave(leaveID) {
        const token = localStorage.getItem('myToken');
        try {
            const respLeaveApproved = await axios.get(`http://localhost:4000/api/v1/approveLeave/${leaveID}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respLeaveApproved.data) {
                toast.success(respLeaveApproved.data.message);
            }
            getAllLeaveData();
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }
    async function denyLeave(leaveID) {
        const token = localStorage.getItem('myToken');
        try {
            const respLeaveRejected = await axios.get(`http://localhost:4000/api/v1/rejectLeave/${leaveID}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respLeaveRejected.data) {
                toast.success(respLeaveRejected.data.message);
            }
            getAllLeaveData();
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
        getAllLeaveData();
    }, []);
    return (
        <>
            <Header />
            <div className="container my-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Student Email</th>
                            <th scope="col">From Date</th>
                            <th scope="col">Till Date</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Approve/Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allLeavesStudent.map((singleLeave, index) => {
                                return (
                                    <tr key={singleLeave._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{singleLeave.forStudent.userEmail}</td>
                                        <td>{singleLeave.fromDate}</td>
                                        <td>{singleLeave.tillDate}</td>
                                        <td>{singleLeave.reasonForLeave}</td>
                                        <td>{
                                            singleLeave.isLeaveApproved === "Pending" ? (<><button className="btn btn-success" onClick={()=>{approveLeave(singleLeave._id)}}>Approve</button><button className="btn btn-danger ms-1" onClick={()=>{denyLeave(singleLeave._id)}}>Reject</button></>) : (singleLeave.isLeaveApproved === "Rejected" ? (<button className="btn btn-danger" disabled>Rejected</button>) : (<button className="btn btn-success" disabled>Accepted</button>))
                                        }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}
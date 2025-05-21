import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import toast from "react-hot-toast";

export default function FacultyCleareanceTable() {
    let myId = localStorage.getItem("myId");
    const [allClearance, setAllClearance] = useState([]);
    async function getAllClearance() {
        const token = localStorage.getItem("myToken");
        try {
            const respAllClearance = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/allClear`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respAllClearance.data) {
                setAllClearance(respAllClearance.data.allClearances);
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
    async function clearApprove(clearId) {
        const token = localStorage.getItem("myToken");
        try {
            const respClearanceApprove = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/validClear/${clearId}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respClearanceApprove.data) {
                toast.success(respClearanceApprove.data.message);
            }
            getAllClearance();
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }
    async function clearReject(clearId) {
        const token = localStorage.getItem("myToken");
        try {
            const respClearanceReject = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/rejClear/${clearId}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respClearanceReject.data) {
                toast.success(respClearanceReject.data.message);
            }
            getAllClearance();
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
        getAllClearance();
        myId = localStorage.getItem("myId");
    }, []);
    if (allClearance.length === 0) {
        return (
            <>
                <Header />
                <div className="container text-center my-5" style={{ height: "65vh" }}>
                    <h5>No Data Found!</h5>
                </div>
                <Footer />
            </>
        )
    }
    else {
        return (
            <>
                <Header />
                <table class="table table-bordered my-5">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Group Leader</th>
                            <th scope="col">First Member</th>
                            <th scope="col">Second Member</th>
                            <th scope="col">Third Member</th>
                            <th scope="col">Approve/Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClearance.map((singleClear, index) => {
                                return (
                                    <tr key={singleClear._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{singleClear.groupLeader}</td>
                                        <td>{singleClear.groupMemberFirst}</td>
                                        <td>{singleClear.groupMemberSecond}</td>
                                        <td>{singleClear.groupMemberThird}</td>
                                        <td>{
                                            singleClear.clearanceApproveFaculty.includes(myId) ? (<button className="btn btn-success" disabled>Accepted!</button>) : (singleClear.clearanceRejectFaculty.includes(myId) ? (<button className="btn btn-danger" disabled>Rejected!</button>) : (<><span className='bg-success text-light p-1' role="button" onClick={() => { clearApprove(singleClear._id) }}>Approved</span><span className='bg-danger text-light p-1 ms-1' role="button" onClick={() => { clearReject(singleClear._id) }}>Rejected</span></>))
                                        }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Footer />
            </>
        )
    }
}
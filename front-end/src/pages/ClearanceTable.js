import React, { useEffect, useState } from "react";
import ClearanceForm from "./ClearanceForm";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ClearanceTable() {
    const [clearFilled, setClearFilled] = useState(false);
    const [facultyAccepted, setFacultyAccepted] = useState([]);
    const [facultyRejected, setFacultyRejected] = useState([]);

    async function userClearanceDetails() {
        const token = localStorage.getItem('myToken');
        try {
            const respClearDetails = await axios.get('http://localhost:4000/api/v1/userdetails', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respClearDetails.data) {
                setClearFilled(respClearDetails.data.userDet.clearanceFilled);
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
    async function getClearanceData() {
        const token = localStorage.getItem("myToken");
        try {
            const respClearanceData = await axios.get('http://localhost:4000/api/v1/partClear', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respClearanceData.data) {
                setFacultyAccepted(respClearanceData.data.particularClearance.clearanceApproveFaculty);
                setFacultyRejected(respClearanceData.data.particularClearance.clearanceRejectFaculty);
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
        userClearanceDetails();
        if(clearFilled === true){
            getClearanceData();
        }
    }, [clearFilled]);
    if (clearFilled === true) {
        return (
            <>
                <Header />
                <table class="table table-bordered my-5">
                    <thead>
                        <tr>
                            <th scope="col">Faculty Who Approved Your Clearance</th>
                            <th scope="col">Faculty Who Rejected Your Clearance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{
                                facultyAccepted.length === 0 ? ("No faculty Approved Right Now!") : (facultyAccepted.map((singleAccept) => {
                                    return (
                                            <tr key={singleAccept._id}>{singleAccept.userEmail}</tr>
                                    )
                                }))
                            }</td>
                            <td>{
                                facultyRejected.length === 0 ? ("No faculty Rejected Right Now!") : (facultyRejected.map((singleReject) => {
                                    return (
                                            <tr key={singleReject._id}>{singleReject.userEmail}</tr>
                                    )
                                }))
                            }</td>
                        </tr>
                    </tbody>
                </table>
                <Footer />
            </>
        )
    }
    else {
        return (<ClearanceForm />)
    }
}
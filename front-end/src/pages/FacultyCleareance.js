import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { LuView } from "react-icons/lu";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FacultyCleareance() {
    const [allReportingData, setAllReportingData] = useState([]);
    async function allReportingDataLists() {
        const token = localStorage.getItem("myToken");
        try {
            const respReportings = await axios.get('http://localhost:4000/api/v1/reportingStudents', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respReportings.data) {
                setAllReportingData(respReportings.data.allStudentsReporting);
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
        allReportingDataLists();
    }, []);
    if (allReportingData.length === 0) {
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
                <div className="container my-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Student Email</th>
                                <th scope="col">Reporting Form</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allReportingData.map((singleReporting, index) => {
                                    return (
                                        <tr key={singleReporting._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{singleReporting.userEmail}</td>
                                            <td><Link to={{ pathname: `/viewReportings/${singleReporting.reportingData}` }} target="_blank"><LuView className="fs-3 fw-bold" role="button" /></Link></td>
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
}
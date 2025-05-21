import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import toast from "react-hot-toast";
import { LuView } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function AllClearance() {
    const [clearanceUse, setClearanceUse] = useState([]);
    async function getClearance() {
        const token = localStorage.getItem("myToken");
        try {
            const respClearance = await axios.get('http://localhost:4000/api/v1/allClear', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respClearance.data) {
                setClearanceUse(respClearance.data.allClearances);
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
        getClearance();
    }, []);
    if (clearanceUse.length === 0) {
        return (
            <>
                <Header />
                <h3>No data clearance</h3>
                <Footer />
            </>
        )
    }
    else {
        return (
            <>
                <Header />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Group Leader</th>
                            <th scope="col">First Member</th>
                            <th scope="col">Second Member</th>
                            <th scope="col">Third Member</th>
                            <th scope="col">View More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clearanceUse.map((singleclear, index) => {
                                return (
                                    <tr key={singleclear._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{singleclear.groupLeader}</td>
                                        <td>{singleclear.groupMemberFirst}</td>
                                        <td>{singleclear.groupMemberSecond}</td>
                                        <td>{singleclear.groupMemberThird}</td>
                                        <td><Link to={{pathname:`/specificClearance/${singleclear._id}`}} target="_blank"><LuView className="fs-3 fw-bold text-primary" role="button"/></Link></td>
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
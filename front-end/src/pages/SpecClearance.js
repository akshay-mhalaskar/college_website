import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function SpecClearance() {
    const location = useLocation();
    const clearId = location.pathname.split("/")[2];
    const [specClear, setSpecClear] = useState({});
    async function getSpecClearanceDetails() {
        try {
            const token = localStorage.getItem("myToken");
            const respSpecClear = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/adminClearance/${clearId}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respSpecClear.data) {
                setSpecClear(respSpecClear.data.clearSpecified);
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
        getSpecClearanceDetails();
    }, []);
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Group Leader</th>
                        <th scope="col">First Member</th>
                        <th scope="col">Second Member</th>
                        <th scope="col">Third Member</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{specClear.groupLeader}</td>
                        <td>{specClear.groupMemberFirst}</td>
                        <td>{specClear.groupMemberSecond}</td>
                        <td>{specClear.groupMemberThird}</td>
                    </tr>
                </tbody>
            </table>
            {
                specClear.clearanceApproveFaculty ? (<div><h3>Faculty who approved this clearance:</h3>{
                    specClear.clearanceApproveFaculty.map((singleApprove)=>{
                        return(
                            <h4>{singleApprove.userEmail}</h4>
                        )
                    })
                }</div>) : ("")
            }
            {
              specClear.clearanceRejectFaculty ? (<div><h3>Faculty who Rejected this clearance:</h3>{
                specClear.clearanceRejectFaculty.map((singleReject)=>{
                    return(
                        <h4>{singleReject.userEmail}</h4>
                    )
                })
            }</div>) : ("")  
            }
        </>
    )
}
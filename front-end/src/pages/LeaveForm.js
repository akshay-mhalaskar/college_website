import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LeaveForm() {
    const [leaveData, setLeaveData] = useState({
        fromDate: "",
        tillDate: "",
        reasonForLeave: ""
    });
    const [myAllLeaves, setMyAllLeaves] = useState([]);

    function monitorLeave(event) {
        setLeaveData((prev) => ({
            ...prev, [event.target.id]: event.target.value
        }))
    }

    async function submitLeaveForm() {
        const token = localStorage.getItem('myToken');
        try {
            const respLeave = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/createLeave`, leaveData, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respLeave.data) {
                toast.success(respLeave.data.message);
            }
            getMyAllLeaves();
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }

    async function getMyAllLeaves(){
        const token = localStorage.getItem('myToken');
        try {
            const respMyLeaves = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/myLeave`,{
                headers: { "Authorization": "Bearer " + token }
            });
            if(respMyLeaves.data){
                setMyAllLeaves(respMyLeaves.data.myAllLeavess);
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
    useEffect(()=>{
        getMyAllLeaves();
    },[]);
    return (
        <>
            <Header />
            <div className='container'>
                <h2 className='text-center m-4' style={{ color: "#1463f3" }}>Leave Form</h2><hr className='fw-bold border border-dark  mb-5' />
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Leave Starts:</label>
                    <input type="date" className="form-control" id="fromDate" placeholder="name@example.com" value={leaveData.fromDate} onChange={monitorLeave} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Leave Ends:</label>
                    <input type="date" className="form-control" id="tillDate" placeholder="name@example.com" value={leaveData.tillDate} onChange={monitorLeave} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Reason:</label>
                    <textarea className="form-control" id="reasonForLeave" rows="3" value={leaveData.reasonForLeave} onChange={monitorLeave}></textarea>
                </div>
                <button className="btn btn-primary mb-5" onClick={submitLeaveForm}>Submit</button>
            </div>
            <hr/>
            {
                myAllLeaves.length === 0 ? (<h4>You have not Applied for Leaves! Apply and It will be shown here</h4>) : (<table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Leave Start Date</th>
                            <th scope="col">Leave End Date</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAllLeaves.map((singleLeaves, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{singleLeaves.fromDate}</td>
                                        <td>{singleLeaves.tillDate}</td>
                                        <td>{singleLeaves.reasonForLeave}</td>
                                        <td>{singleLeaves.isLeaveApproved}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>)
            }
            <Footer />
        </>
    )
}
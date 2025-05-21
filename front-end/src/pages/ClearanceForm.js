import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function ClearanceForm() {
    const navigate = useNavigate();
    const [clearanceData,setClearanceData] = useState({
        groupLeader:"",
        groupMemberFirst:"",
        groupMemberSecond:"",
        groupMemberThird:""
    });
    function monitorClearance(event){
        setClearanceData((prev)=>({
            ...prev,[event.target.id]:event.target.value
        }))
    }
    async function submitClearance(event){
        event.preventDefault();
        const token = localStorage.getItem("myToken");
        try {
            const respClearance = await axios.post('http://localhost:4000/api/v1/clearanceadd',clearanceData,{
                headers:{"Authorization": "Bearer " + token}
            });
            if(respClearance.data){
                toast.success(respClearance.data.message);
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
            <div className='container'>
                <h2 className='text-center m-4' style={{ color: "#1463f3" }}>Clearance Form</h2><hr className='fw-bold border border-dark  mb-4' />
                <form onSubmit={submitClearance}>
                    {/* <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Project Group No.:</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" />
                        </div>
                    </div> */}
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label fw-bold">Name of Students:</label>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">1 (Group Leader):</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id='groupLeader' value={clearanceData.groupLeader} onChange={monitorClearance} required/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">2 (Group Member):</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id='groupMemberFirst' value={clearanceData.groupMemberFirst} onChange={monitorClearance} required />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">3 (Group Member):</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id='groupMemberSecond' value={clearanceData.groupMemberSecond} onChange={monitorClearance} required />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">4 (Group Member):</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id='groupMemberThird' value={clearanceData.groupMemberThird} onChange={monitorClearance} required />
                        </div>
                    </div><hr className='border border-dark  mt-5'/>
                    <input type='submit' className='btn btn-primary mb-5'></input>
                </form>
            </div>
            <Footer />
        </>
    )
}

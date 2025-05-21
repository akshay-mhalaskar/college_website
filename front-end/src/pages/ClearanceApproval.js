import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ClearanceApproval() {
    return (
        <>
            <Header />
            <div className='container'>
                <h2 className='text-center m-4' style={{ color: "#1463f3" }}>Clearance Form Approval:</h2><hr className='fw-bold border border-dark  mb-4' />
                <form>
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
                            <input type="text" className="form-control" readOnly />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">2 (Group Member):</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" readOnly />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">3 (Group Member):</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" readOnly />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">4 (Group Member):</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" readOnly />
                        </div>
                    </div><hr className='border border-dark  mt-5' />
                    <table class="table table-bordered my-5">
                        <thead>
                            <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Faculty Name</th>
                                <th scope="col">Approve/Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td><button className='btn btn-success me-2'>Approve</button><button className='btn btn-danger'>Reject</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <Footer />
        </>
    )
}

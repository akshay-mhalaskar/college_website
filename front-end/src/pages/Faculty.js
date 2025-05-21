import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../stylesheets/Faculty.css';
import faculty1 from '../images/bhantane.jpg';
import faculty2 from '../images/bhopale.jpg';
import faculty3 from '../images/chaudhari.jpg';
import faculty4 from '../images/darwante.jpg';
import faculty5 from '../images/gupta.jpg';
import faculty6 from '../images/hod.jpg';
import faculty7 from '../images/kapale.jpg';
import faculty8 from '../images/khandekar.jpg';
import faculty9 from '../images/kulkarni.jpg';
import faculty10 from '../images/lokhande.jpg';
import faculty11 from '../images/mahurkar.jpg';
import faculty12 from '../images/sayed.jpg';
import faculty13 from '../images/sebastian.jpg';
import faculty14 from '../images/siddiqui.jpg';
import faculty15 from '../images/vibhute.jpg';

export default function Faculty() {
    return (
        <>
            <Header />
            <div className='container'>
                <h2 className='text-center m-4' style={{ color: "#1463f3" }}>Faculty</h2><hr className='fw-bold border border-dark  mb-5' />

                {/* ******************************************************** row ************************************************************** */}
                <div className='row my-3'>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty6} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Dr. B. S. Agarkar</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Professor & HOD</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 01/10/1990</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: B. E. 1st class with distinction</li>
                                            <li>PG: M. Tech. 1st class</li>
                                            <li>Ph.D: Electronics Engg</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty13} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Dr. S. George</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample2">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 11/09/1995</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG:B.Tech(Engg.);Instrumentation & Control Engg.;</li>
                                            <li>PG:MS(Electronics and Control)CGPA 7.41</li>
                                            <li>Ph.D: Electronics Engg</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty3} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Dr. S. V. Chaudhari</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Associate Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample3">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 21/07/2010</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: B.E.ETX (I Class)</li>
                                            <li>PG: M.E. ETX (I Class )</li>
                                            <li>Ph.D: Electronics Engg.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ******************************************************** row ************************************************************** */}
                <div className='row my-3'>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty4} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Dr. N. K. Darwante</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Associate Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample4">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 20/07/2006</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: BE –E&Tc( I Class with distinction )</li>
                                            <li>PG: ME-ETX ( I Class)</li>
                                            <li>Ph.D: Electronics Engineering (Computer vision)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty5} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Prof. S. K. Gupta</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Assistant Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample5">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 11/07/2012</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: FIRST CLASS/ 61 %</li>
                                            <li>PG: FIRST CLASS/ 7.15 CGPA</li>
                                            <li>Ph.D: NIL</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty2} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Prof. N. I. Bhopale</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Assistant Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample6">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong>16/08/2007</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: First Class</li>
                                            <li>PG: DISTINCTION (9.167)</li>
                                            <li>Ph.D: Pursuing from Dr. BAMU</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ******************************************************** row ************************************************************** */}
                <div className='row my-3'>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty7} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Prof. N. D. Kapale</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Assistant Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample7">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 01/09/1999</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: BE(Industrial Electronics) First Class</li>
                                            <li>PG: ME(Electronics)First Class</li>
                                            <li>Ph.D: Pursuing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty8} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Prof. Y. R. Khandekar</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Assistant Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample8" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample8">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 18/01/2010</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: E&TC (First Class)</li>
                                            <li>PG: Digital System (First Class)</li>
                                            <li>Ph.D: Pursuing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty9} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Prof. S.S.Kulkarni</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Assistant Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample9" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample9">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 01/08/2009</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: E&TC (First Division)</li>
                                            <li>PG: ETX (First Class with Distinction)</li>
                                            <li>Ph.D: NIL</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ******************************************************** row ************************************************************** */}
                <div className='row my-3'>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty10} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Prof. D. G. Lokhande</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Assistant Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample10" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample10">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 05/02/2001</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: ETX First with Distinction</li>
                                            <li>PG: ETX First Class</li>
                                            <li>Ph.D: Pursuing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty11} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Mahurar Dipak Pralhad</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Assistant Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample11" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample11">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 01/09/2002</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: B. E. 1st class</li>
                                            <li>PG: M. Tech. 1st class</li>
                                            <li>Ph.D: Electronics Pursuing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty12} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Prof. M. A. Sayyad</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Assistant Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample12" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample12">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 15/01/2001</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: ETX First Class</li>
                                            <li>PG: ETX First Class</li>
                                            <li>Ph.D: Pursuing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ******************************************************** row ************************************************************** */}
                <div className='row my-3'>

                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty14} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Prof. N. Y.Siddiqui</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Assistant Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample13" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample13">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 17/07/2003</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: BE ( I Class)</li>
                                            <li>PG: ME ( I Class)</li>
                                            <li>Ph.D: Pursuing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty15} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Prof. P. M. Vibhute</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Assistant Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample14" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample14">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 04/08/2010</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: B.E. E&TC (I Class)</li>
                                            <li>PG: M.E. Elex Digital Systems (I Class)</li>
                                            <li>Ph.D: Pursuing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card card-shadow mb-3" style={{ width: "24rem", border: "none" }}>
                            <div className='text-center mt-4'>
                                <img src={faculty1} className="card-img-top" alt="..." style={{ width: "21rem" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-2"><strong className='pe-2' style={{ color: "#1463f3" }}>Name:</strong>Prof. G. A. Bhatane</h5>
                                <h5 className="card-title mt-4"><strong className='pe-2' style={{ color: "#1463f3" }}>Designation:</strong>Assistant Professor</h5>
                                <a class="btn btn-primary mt-3" data-bs-toggle="collapse" href="#collapseExample15" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Know more
                                </a>
                                <div class="collapse" id="collapseExample15">
                                    <div class="card card-body mt-3">
                                        <p><strong style={{ color: "#1463f3" }}>Department:</strong> Electronics & Telecommunication Engineering</p>
                                        <p><strong style={{ color: "#1463f3" }}>Date of Joining the Institution:</strong> 28/08/2006</p>
                                        <p><strong style={{ color: "#1463f3" }}>Qualifications with Class/Grade:</strong></p>
                                        <ul>
                                            <li>UG: BE[Electronics] First Class</li>
                                            <li>PG: ME[E&TC] [VLSI&Emb.Sys.] First Class</li>
                                            <li>Ph.D: Pursuing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

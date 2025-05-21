import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../stylesheets/Footer.css';

export default function Footer() {
    return (
        <div style={{ backgroundColor: "#f4f4f4" }}>
            <footer className='container py-5'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <div className='text-center'>
                            <ul className='d-flex justify-content-center p-3'>
                                <a href='/'><li className='list-group-item me-3'><FaFacebookF className='border border-dark text-dark p-2 fs-1' id='facebook-btn' style={{ borderRadius: "50%" }} /></li></a>
                                <a href='/'><li className='list-group-item me-3'><FaXTwitter className='border border-dark text-dark p-2 fs-1' id='twitter-btn' style={{ borderRadius: "50%" }} /></li></a>
                                <a href='/'><li className='list-group-item me-3'><FaLinkedinIn className='border border-dark text-dark p-2 fs-1' id='linkedin-btn' style={{ borderRadius: "50%" }} /></li></a>
                                <a href='/'><li className='list-group-item me-3'><FaInstagram className='border border-dark text-dark p-2 fs-1' id='instagram-btn' style={{ borderRadius: "50%" }} /></li></a>
                                <a href='/'><li className='list-group-item me-3'><FaYoutube className='border border-dark text-dark p-2 fs-1' id='youtube-btn' style={{ borderRadius: "50%" }} /></li></a>
                            </ul>
                            <p>Copyright © 2024, Sanjivani College of Engineering</p>
                            {/* <p>:::| powered by dimakh consultants |:::</p> */}
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <ul>
                            <li className="list-group-item"><h6>Contact Us</h6></li>
                            <li className="list-group-item"><p>Sanjivini College of Engineering, Kopargaon Tal. Kopargaon, Pincode 423 603. District: Ahmednagar, Maharashtra</p></li>
                            <li className="list-group-item d-flex flex-row"><p className='pe-2 fw-medium'>Call:</p><p>+91 9130191301</p></li>
                            <li className="list-group-item d-flex flex-row"><p className='pe-2 fw-medium'>Email:</p><p>contact@sanjivini.org.in</p></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

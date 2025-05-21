import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactUs() {
    return (
        <>
            <Header />
            <div className='container'>
                <h2 className='text-center m-4' style={{ color: "#1463f3" }}>Contact Us:</h2><hr className='fw-bold border border-dark  mb-5' />
                <div className='row mb-5 pb-5'>
                    <div className='col'>
                        <img className='float-end' src='https://media.collegedekho.com/media/img/institute/logo/Sanjivani_GOI_LOGO.jpg' alt='alt' height={"300vh"} />
                    </div>
                    <div className='col'>
                        <p className='fs-2' style={{ color: "#1463f3" }}>Sanjivini College of Engineering (An Autonomous Institute), Kopargaon</p>
                        <p className='fs-5'>Tal.Kopargaon<br />
                            Pincode 423 603.<br />
                            District Ahmednagar, Maharashtra.<br />
                            Call : 9130191301<br />
                            Email : contact@sanjivani.org.in<br /><br />
                            Nearest Railway Station- Kopargaon (1Km)<br /><br />
                            Nearest Airport - Shirdi (10Km)
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

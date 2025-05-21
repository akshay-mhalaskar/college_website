import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import whyECE from '../images/whyECE.jpg';
import AluminiCarousal from '../components/AluminiCarousal';
import '../stylesheets/Home.css';

export default function Home() {
    return (
        <>
            <Header />
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <h1 style={{ color: "#1463f3" }}>Why choose ECE?</h1><hr className='fw-bold border border-dark' />
                        <p>Choosing Electronics and Communication Engineering (ECE) as a career path offers a unique blend of innovation, practicality, and global relevance. The versatility of ECE allows you to explore various specialised areas, from microelectronics to wireless communication, opening up diverse career opportunities.</p>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <img src={whyECE} height={"300vh"} className='float-end' alt='alt' />
                    </div>
                </div>
                <p className='border border-dark my-5 py-1 text-center fs-4' style={{ borderRadius: "20px", backgroundColor: "#1463f3", color: "white" }}>To Develop World Class Professionals through Quality Education.</p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link internal-navbar active fs-5" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">VISION & MISION</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link internal-navbar fs-5" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">PEOS</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link internal-navbar fs-5" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">POS</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link internal-navbar fs-5" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">PSOS</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active m-5" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <h3 style={{ color: "#1463f3" }}>Vision of department</h3><br />
                        <p>To produce quality professionals in the field of Electronics and Telecommunication Engineering with knowledge and skill sets to meet diversifying needs of industry and society.</p><br />
                        <h3 style={{ color: "#1463f3" }}>Mision of department</h3><br />
                        <p>M1- To impart the technology of Electronics and Telecommunication Engineering through effective teaching-learning process.<br /><br />
                            M2- To establish linkages between industry and academia for overall development of students.<br /><br />
                            M3- To promote innovative ideas in solving multi-disciplinary engineering problems having social relevance.<br /><br />
                            M4- To develop technical human resources exhibiting professional and ethical attitudes.
                        </p>
                    </div>
                    <div class="tab-pane fade m-5" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <h3 style={{ color: "#1463f3" }}>Program Educational Objectives (PEOs)</h3><br />
                        <p>PEO 1: Involve in design, manufacturing, integration and testing of products, software and systems in the field of Electronics & Telecommunication engineering and allied disciplines.<br /><br />
                            PEO 2: Solve engineering problems having social relevance by applying knowledge and skill sets related to Electronics & Telecommunication engineering.<br /><br />
                            PEO 3: Pursue higher Education/Research in the field of Engineering/Management or become a successful entrepreneur in the related areas.<br /><br />
                            PEO 4: Work effectively as an individual and/or a team member of multi-disciplinary assignments involving people across different cultures and national boundaries.
                        </p>
                    </div>
                    <div class="tab-pane fade m-5" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <h3 style={{ color: "#1463f3" }}>Program Outcomes</h3><br />
                        <p>PO1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.<br /><br />
                            PO2: Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.<br /><br />
                            PO3:Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.<br /><br />
                            PO4: Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.<br /><br />
                            PO5: Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.<br /><br />
                            PO6: The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.<br /><br />
                            PO7: Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.<br /><br />
                            PO8: Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.<br /><br />
                            PO9: Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.<br /><br />
                            PO10:Communication: Effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation,make effective presentations, and give and receive clear instructions.<br /><br />
                            PO11: Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.<br /><br />
                            PO12: Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.
                        </p>
                    </div>
                    <div class="tab-pane fade m-5" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                        <h3 style={{ color: "#1463f3" }}>Program Specific Outcomes (PSOs)</h3><br />
                        <p>PSO 1: Specify, Design, Test and Implement electronic systems related to Signal Processing, Networking, Embedded architectures and IoT using state of the art components and software.<br /><br />
                            PSO 2: Provide software solutions for engineering problems by applying knowledge of Data Structures, Algorithms, Database Management, Web Technology, Big Data and Cloud Computing.
                        </p>
                    </div>
                </div>
                <AluminiCarousal />
            </div>
            <Footer />
        </>
    )
}

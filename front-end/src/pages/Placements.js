import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../stylesheets/Placement.css';

export default function Placements() {
    return (
        <>
            <Header />
            <div className='container'>
                <h2 className='text-center m-4' style={{ color: "#1463f3" }}>Achievements & Placements</h2><hr className='fw-bold border border-dark  mb-5' />
                <div>
                    <div class="nav flex-column nav-pills me-3 placement-sidebar" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Achievements</button>
                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Placements</button>
                    </div>
                    <div class="tab-content ms-4" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                            <h3 style={{ color: "#1463f3" }}>Major Achievements of Department :</h3><br />
                            <ul>
                                <li className='my-2'>Received AICTE Grant of Rs-5.22 Laks to organize AICTE sponsored Two Weeks. Faculty Development Program (FDP) on “Emerging Trends in Speech, Image and Video Processing Techniques” from 25th November, 2019 to 7th December,2019.</li>
                                <li className='my-2'>Set Up Texas Instruments Centre of Excellence under TI University Program in association with SPPU,Pune.</li>
                                <li className='my-2'>“CISCO Academy is started (ID: 400051817) in the E&Tc Engg. department with module “ Fundamentals of IoT”.</li>
                                <li className='my-2'>Due to Excellent performance as a Super Resource Centre our Institute is now promoted to “Knowledge Center” from Spoken Tutorial Project, IIT Bombay. We are the First in India to become Knowledge Hub and conducted a “Train the Teachers Program” with 65+ participants from different nearby schools.</li>
                                <li className='my-2'>“Electronics Hobby Club” is started in the department for the students who have keen interest in electronic repair and maintenance.</li>
                                <li className='my-2'>eYantra Lab : We have set up Robotics Laboratory in association with IIT, Bombay. As a initiative under this eYantra Lab, a team of 40 students have participated in ROBOCON 2017,2018 and 2019.</li>
                                <li className='my-2'>Professional bodies/Associations working in the Department:</li>
                                <li className='my-2'>I. Electronics and Telecommunication Engineering Student Association (ETESA),</li>
                                <li className='my-2'>II. Institute of Electrical and Electronics Engineers (IEEE),</li>
                                <li className='my-2'>III. IETE Students Forum (ISF).</li>
                                <li className='my-2'>Nodal Centre, ePrayog, IIT, Bombay.</li>
                                <li className='my-2'>Local Spoken Tutorial video server established in E&Tc Department as a Pilot Project. Which was Inaugurated and appreciated by IIT, Bombay.</li>
                                <li className='my-2'>no. of students participated in various activities in and outside college :- 43</li>
                                <li className='my-2'>Total no. of students got prizes :- 20</li>
                                <li className='my-2'>Total no. of students completed Industrial Internship:- 37</li>
                                <li className='my-2'>National Conference on Advances in Engineering and Management NCAEM-18 was organized by department during 28th& 29th Dec. 2018 and it was sponsored by SPPU, Pune.</li>
                                <li className='my-2'>Expert lecture were organized under banner of Sanjivani My Story board on 15/01/2020 of Mr. Saket Hardikar Head-Business Development Brabo Robotics and Automation Ltd.(A Tata Motors Company).</li>
                                <li className='my-2'>Expert lecture were organized under banner of Sanjivani My Story board on 15/02/2020 of Mr. Siddheshwar Mahajan , Senior Product Engineer , APTIV Ltd(Delphi Automative Systems), Pune</li>
                                <li className='my-2'>Expert lecture were organized under banner of Sanjivani Story board on 20/3/2019 of Mr. Pawan Patil ,Senior Software Engineer & Analyst TIAA, Pune.</li>
                                <li className='my-2'>Expert Lectures was Organized under Sanjivani Thought Leader on 7/9/2018 by Mr. Manish Gupta Chairman, Chrysalis Group, Pune.</li>
                                <li className='my-2'>Expert lecture on“Secrets for Guaranteed Success in Interviews” by Mr. Dinesh Anantwar, Ex. Global Head, Training Delivery and Certification, i GATE, Patni was arranged under Sanjivani i-Connect</li>
                                <li className='my-2'>Expert lecture under Sanjivani My Story Board was organized on 1/10/2018 of Mr. Nihal Ahmed,Subject Matter Expert,Functional Safety, Tech Mahindra;Bengaluru</li>
                                <li className='my-2'>Expert lecture under Sanjivani My Story Board was organized on 14/08 /2018 of Mr. Kumar Bhanu, Asst. Manager, Vodafone Mobile Services Ltd., Lucknow .</li>
                                <li className='my-2'>Expert Lecture on “Global Best Teaching Practices” By Mr. Dinesh Anantwar, Ex. Global Head, Training Delievery and Certification I-Gate Patni was organized for faculty of various departments on 22/3/ 2019</li>
                                <li className='my-2'>Department has organized guest lecture of Mr. Balakrishnan, Managing Director and Mr. Sandeep Pandey , HR, Head, EPCOS India Pvt. Ltd. under “Sanjivani Thought Leader” Programme.</li>
                            </ul>
                            <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">FACULTY</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">STUDENT</button>
                                </li>
                            </ul>
                            <div class="tab-content mb-5" id="myTabContent">
                                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                    <h3 style={{ color: "#1463f3" }}>Faculty Achievements :</h3><br />
                                    <ul>
                                        <li className='my-2'>No of Faculty Completed Ph.D. – 02 Dr. S. George, Dr. N. K. Darwante</li>
                                        <li className='my-2'>No. of Faculty members registered for Ph.D. – 10</li>
                                        <li className='my-2'>Mr. Shailesh S. Kulkarni completed NPTEL certification on “Java Programming” with Elite & gold medal with 96% marks and he is amongst the 5% toppers who appeared for this course.</li>
                                        <li className='my-2'>No. of research papers published in national and International Conferences - 13</li>
                                        <li className='my-2'>Total no of Workshop/ Seminars & STTP attended – 17</li>
                                        <li className='my-2'>Dr. B. S. Agarkar elected as a Member, Senate, Savitribai Phule Pune University, Pune</li>
                                        <li className='my-2'>Organized Three days (22 Hours) Capsule course on “Skill Development in advanced Embedded Systems and Industrial Automation” from 9th to 12th January 2019.</li>
                                        <li className='my-2'>Organized Capsule course on “Introduction to Python Programming” for Third year E&Tc students on Every Friday from 2.30PM to 5.00PM(20Hours) throughout second semester of AY 2018-19.</li>
                                        <li className='my-2'>Capsule course on “C Fundamentals” (20Hours) is organized for Second year E&Tc students.</li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                    <h3 style={{ color: "#1463f3" }}>Student Achievements :</h3><br />
                                    <ul>
                                        <li>Asane Samiksha R. and Mhaske Vrushali K. were RUNNER UP in STATE LEVEL Inter Zonal Volley Ball tournament held at C. D. Jain College, Srirampur on3rd and 4th October 2018.</li>
                                        <li className='my-2'>Rashinkar Nilesh was WINNER in ‘Box Badminton’ at national level Technical Festival organized by Sandip Institute of Engineering & Management, Nasik on 22nd &23rd February 2019.</li>
                                        <li className='my-2'>Patil Atul and Rajput Adarshsingh wasWINNER in National level Inter-Engineering Sports meet “SUMMIT’18”held at MIT-WPU, Pune during 4th to 8th September 2018.</li>
                                        <li className='my-2'>Rajput Adarshsingh was WINNER in STATE LEVEL Inter ZonalVolley Ball tournament organized by AmrutvahiniCollegeof Engg. Sangamner, on 4th and 5th October 2018.</li>
                                        <li className='my-2'>Team “Spitfire” stood 1st Rank in Maharashtra and 5th in India for cracking Virtual Round of Hybrid Vehicle Challenge (HVC).</li>
                                        <li className='my-2'>Team “Spitfire” got all India 2nd Rank and “Best Acceleration Award” of HVC-2018 held at Buddha International Circuit, Noida under the Ministry of New and Renewable Energy Govt. of India.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                            <h3 style={{ color: "#1463f3" }}>List of placed students in AY 2022-23 :</h3><br />
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr.no</th>
                                        <th scope="col">Name of Student</th>
                                        <th scope="col">Year of Passing</th>
                                        <th scope="col">Employer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">1</th>
                                        <td className='py-3 pe-5'>Kakde Jyoti  Kailas</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Celebal Technologies</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">2</th>
                                        <td className='py-3 pe-5'>Warkar Vaibhav Dilip</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Celebal Technologies</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">3</th>
                                        <td className='py-3 pe-5'>Ahire Madhuri Kailas</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Celebal Technologies</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">4</th>
                                        <td className='py-3 pe-5'>Musmade Rutika Balasaheb</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Celebal Technologies</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">5</th>
                                        <td className='py-3 pe-5'>Punjabi Simran Ravitabh</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Celebal Technologies</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">6</th>
                                        <td className='py-3 pe-5'>Surule Pratik Ashok</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Celebal Technologies</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">7</th>
                                        <td className='py-3 pe-5'>Shubham Dattatray Kote</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Celebal Technologies</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">8</th>
                                        <td className='py-3 pe-5'>Pawar Mahesh Digambar</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Celebal Technologies</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">9</th>
                                        <td className='py-3 pe-5'>Deshpande Prajwal Abhay</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Colgate</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">10</th>
                                        <td className='py-3 pe-5'>Gunjal Yash Ganesh</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Colgate</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">11</th>
                                        <td className='py-3 pe-5'>Avhad Snehal Sopan</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>KPIT</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">12</th>
                                        <td className='py-3 pe-5'>Gagare Shruti Sunil</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>KPIT</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">13</th>
                                        <td className='py-3 pe-5'>Kurkute Aditi Dnyaneshwar</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>KPIT</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">14</th>
                                        <td className='py-3 pe-5'>Sabale Gayatri Chintaram</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>KPIT</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">15</th>
                                        <td className='py-3 pe-5'>Wagh Vaishnavi Ramnath</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>KPIT</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">16</th>
                                        <td className='py-3 pe-5'>Sonawane Priyanka Subhash</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Deloitte</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">17</th>
                                        <td className='py-3 pe-5'>Rindhe Viraj Pralhad</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Deloitte</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">18</th>
                                        <td className='py-3 pe-5'>Bhakti Prashant Penshanwar</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Deloitte</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">19</th>
                                        <td className='py-3 pe-5'>Bhujbal Vaishnavi Manoj</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Deloitte</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">20</th>
                                        <td className='py-3 pe-5'>Gavitre Manjushree Dattu</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Deloitte</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">21</th>
                                        <td className='py-3 pe-5'>Doiphode Aditya Nanasaheb</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Hexaware technologies</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">22</th>
                                        <td className='py-3 pe-5'>Harivardhan</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Hexaware technologies</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">23</th>
                                        <td className='py-3 pe-5'>Mahale Aditya Umesh</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>TCS</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">24</th>
                                        <td className='py-3 pe-5'>Patole Ishwar Dipak</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Deloitte</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">25</th>
                                        <td className='py-3 pe-5'>Harde Tejas Paraji</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Deloitte</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">26</th>
                                        <td className='py-3 pe-5'>Bhadakwade Sakshi Sanjay</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>TCS</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">27</th>
                                        <td className='py-3 pe-5'>Jadhav Abhinav Ashok</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Orange Business Services</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">28</th>
                                        <td className='py-3 pe-5'>Ghuge Mahesh Pappu</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Cyber Success</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">29</th>
                                        <td className='py-3 pe-5'>Rutika Balasaheb Musmade</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Epitome Pvt. Ltd.</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">30</th>
                                        <td className='py-3 pe-5'>Ghuge Mahesh Pappu</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Epitome Components Pvt. Ltd.</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">31</th>
                                        <td className='py-3 pe-5'>Raut Prerna Ravindra</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Epitome Components Pvt. Ltd.</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">32</th>
                                        <td className='py-3 pe-5'>Yashoda Dileep Chine</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Epitome</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">33</th>
                                        <td className='py-3 pe-5'>Bhadakwade Sakshi Sanjay</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Johnson Controls</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">34</th>
                                        <td className='py-3 pe-5'>Chine Yashoda Dileep</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Olam information systems</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">35</th>
                                        <td className='py-3 pe-5'>Ghuge Mahesh Pappu</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Olam information systems</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">36</th>
                                        <td className='py-3 pe-5'>Gadade Swapnil Ashok</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Connectwell</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">37</th>
                                        <td className='py-3 pe-5'>Deokar Aditya Kailas</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Connectwell</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">38</th>
                                        <td className='py-3 pe-5'>Mhasrup Ashwini Babasaheb</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>FiNS Solutions</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">39</th>
                                        <td className='py-3 pe-5'>Nikam Aarti Ravindra</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>FiNS Solutions</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">40</th>
                                        <td className='py-3 pe-5'>Om Dalvi</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>TCS</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">41</th>
                                        <td className='py-3 pe-5'>Harivardhan</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Ethuns LOI</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">42</th>
                                        <td className='py-3 pe-5'>Thombare Ganesh Navnath</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Ethuns LOI</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">43</th>
                                        <td className='py-3 pe-5'>Pandekar Aditya Kailas</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Ethuns LOI</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">44</th>
                                        <td className='py-3 pe-5'>Gambhir Rohan Anil</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Ethuns LOI</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">45</th>
                                        <td className='py-3 pe-5'>Nehe Sakshi Dilip</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Ethuns LOI</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">46</th>
                                        <td className='py-3 pe-5'>Hiwale Harshwardhan Dinesh</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Ethuns LOI</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">47</th>
                                        <td className='py-3 pe-5'>Kote Madhuri Arjun</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Ethuns LOI</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">48</th>
                                        <td className='py-3 pe-5'>Lasure Aditya Bajrang</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Avatron Industries pvt Ltd,</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">49</th>
                                        <td className='py-3 pe-5'>Shimpi Amisha Ajaykumar</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Force Motors</td>
                                    </tr>
                                    <tr>
                                        <th className='py-3 pe-5' scope="row">50</th>
                                        <td className='py-3 pe-5'>Chavan Vaibhav Balwant</td>
                                        <td className='py-3 pe-5'>2023</td>
                                        <td className='py-3 pe-5'>Jabil circuit pvt ltd</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

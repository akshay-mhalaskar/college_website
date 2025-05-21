import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Laboratory() {
    return (
        <>
            <Header />
            <div className='container'>
                <h2 className='text-center m-4' style={{ color: "#1463f3" }}>Laboratory details:</h2><hr className='fw-bold border border-dark  mb-5' />
                <table className="table table-striped mb-5 overflow-x-auto">
                    <thead>
                        <tr>
                            <th className='p-4' scope="col">Sr. No.</th>
                            <th className='p-4' scope="col">Name of Laboratory</th>
                            <th className='p-4' scope="col">Area in sq. meters</th>
                            <th className='p-4' scope="col">Major Equipment’s</th>
                            <th className='p-4' scope="col">Cost (In Rs.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='p-4' scope="row">1</th>
                            <td className='p-4'>Basic Electronics</td>
                            <td className='p-4'>100</td>
                            <td className='p-4'>DSO (100Mhz),Synthesized Function Generator, Simulation Software- Proteus</td>
                            <td className='p-4'>1694733.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">2</th>
                            <td className='p-4'>Analog & Digital Communication</td>
                            <td className='p-4'>100</td>
                            <td className='p-4'>Antenna Trainer, Digital TV Trainer,Spectrum Analyser, HDTV Trainer, LCD TV, AM FM signal generator,3G Mobile Trainer.</td>
                            <td className='p-4'>2268521.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">3</th>
                            <td className='p-4'>Microwave and FOC</td>
                            <td className='p-4'>100</td>
                            <td className='p-4'>GSP 810 DM Spectrum Analyzer, GDS 2102 Advaced D.S.O., Microwave test bench,Antenna Trainer, Satelilite Communication Trainer</td>
                            <td className='p-4'>2324138.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">4</th>
                            <td className='p-4'>Power Electronics</td>
                            <td className='p-4'>67</td>
                            <td className='p-4'>Power quality analyser, Single phase bridge converter</td>
                            <td className='p-4'>671092.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">5</th>
                            <td className='p-4'>Post Graduate</td>
                            <td className='p-4'>67</td>
                            <td className='p-4'>IBM Server</td>
                            <td className='p-4'>2568212.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">6</th>
                            <td className='p-4'>Electronics Design & Project</td>
                            <td className='p-4'>67</td>
                            <td className='p-4'>(OrCAD) Capture-03 Software, PSPICE-01, LAYOUT-01, SCINTECH 403(DSO)</td>
                            <td className='p-4'>3086594.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">7</th>
                            <td className='p-4'>Printed Circuit Board</td>
                            <td className='p-4'>67</td>
                            <td className='p-4'>Reprographic camera, Etching Machine, Ultraviolet exposure Unit , Tinning Machine</td>
                            <td className='p-4'>1831136.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">8</th>
                            <td className='p-4'>Test & Measurement</td>
                            <td className='p-4'>67</td>
                            <td className='p-4'>OTDR, 6-1/2 Digit DMM, Logic Analyser,Educational Practice Board for 28335 with USBJTAG Emulator. Micrologix PLC</td>
                            <td className='p-4'>189582.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">9</th>
                            <td className='p-4'>C.N. & Embedded System</td>
                            <td className='p-4'>67</td>
                            <td className='p-4'>IBM Server, ASUS all in one PC’s with core I3 processor(21 in numbers).</td>
                            <td className='p-4'>1154414.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">10</th>
                            <td className='p-4'>Microcontroller</td>
                            <td className='p-4'>67</td>
                            <td className='p-4'>DSO-1 No., Linear cum Digital IC Tester-1, ARM 7 LPC 2148 Trainer kit- 10 Nos, DSP Starter Kit, FPGA Kit, CPLD Kit, Xilinx Ver Li3 S/W</td>
                            <td className='p-4'>331993.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">11</th>
                            <td className='p-4'>VLSI & DSP</td>
                            <td className='p-4'>100</td>
                            <td className='p-4'>Spartan DSP Trainer,  DSP Trainer and Code Composer Software, Xilinx 9.1 Software, Microwind Software, FPGA Proto Board, Server PC</td>
                            <td className='p-4'>1429675.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">12</th>
                            <td className='p-4'>Research</td>
                            <td className='p-4'>100</td>
                            <td className='p-4'>DSO , DSP TMDSVDP6437KIT with TV Tuner Card and CCD Colour Camera, TMS320C6713 DSP Starter kit, IBM Server, Genesis2 kit<br />
                                Software: Matlab 13.1, Xilinx VIVADO Design Suit, SAP site License Programme.</td>
                            <td>3150303.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row">13</th>
                            <td className='p-4'>e-Yantra</td>
                            <td className='p-4'>45</td>
                            <td className='p-4'>FirebirdV Robots</td>
                            <td className='p-4'>492874.00</td>
                        </tr>
                        <tr>
                            <th className='p-4' scope="row"></th>
                            <td className='p-4' colspan="3">Total cost</td>
                            <td className='p-4'>2,11,93,267.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}

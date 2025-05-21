import React from "react";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import Laboratory from "./pages/Laboratory";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import ReportingTable from "./pages/ReportingTable";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginProtect from "./protections/LoginProtect";
import FacultyCleareance from "./pages/FacultyCleareance";
import ReportingDetails from "./pages/ReportingDetails";
import ClearanceTable from "./pages/ClearanceTable";
import LeaveForm from "./pages/LeaveForm";
import AllLeaves from "./pages/AllLeaves";
import Placements from "./pages/Placements";
import FacultyCleareanceTable from "./pages/FacultyClearanceTable";
import AllClearance from "./pages/AllClearances";
import SpecClearance from "./pages/SpecClearance";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/faculty" element={<Faculty />}></Route>
                <Route path="/laboratory" element={<Laboratory />}></Route>
                <Route path="/contactus" element={<ContactUs />}></Route>
                <Route path="/login" element={<LoginProtect Comp={Login}></LoginProtect>}></Route>
                <Route path="/reporting" element={<ReportingTable />}></Route>
                <Route path="/allReportings" element={<FacultyCleareance />}></Route>
                <Route path="/clearanceform" element={<ClearanceTable />}></Route>
                <Route path="/viewReportings/:reportId" element={<ReportingDetails />}></Route>
                <Route path="/leaveGrant" element={<LeaveForm />}></Route>
                <Route path="/allLeaves" element={<AllLeaves />}></Route>
                <Route path="/placements" element={<Placements />}></Route>
                <Route path="/allClearance" element={<FacultyCleareanceTable/>}></Route>
                <Route path="/adminClearance" element={<AllClearance/>}></Route>
                <Route path="/specificClearance/:clearId" element={<SpecClearance/>}></Route>
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
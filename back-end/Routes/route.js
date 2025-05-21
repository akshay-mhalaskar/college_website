const express = require('express');
const route = express.Router();

//Student Controllers
const studentLogin = require('../Controllers/studentLogin');
const reportingAdd = require('../Controllers/reportingAdd');
const userDetails = require('../Controllers/userDetails');
const createLeave = require('../Controllers/createLeave');
const stateChecker = require('../Controllers/stateChecker');
const clearanceCreate = require('../Controllers/clearanceCreate');
const particularClearance = require('../Controllers/getParticularClearance');
const updatedReportingDetails = require('../Controllers/updateReporting');
const myAllLeaves = require('../Controllers/myLeaves');

//Faculty Controllers
const facultyLogin = require('../Controllers/facultyLogin');
const allResponsesFaculty = require('../Controllers/facultyReportingCheck');
const specReportingData = require('../Controllers/specReportingData');
const approveReporting = require('../Controllers/approveReporting');
const rejectReporting = require('../Controllers/rejectReporting');
const allLeaves = require('../Controllers/getAllLeaves');
const allClearance = require('../Controllers/allClearances');
const validateClearance = require('../Controllers/validateClearance');
const rejectClearance = require('../Controllers/rejectClearance');
const approveLeave = require('../Controllers/leaveApprove');
const rejectLeave = require('../Controllers/rejectLeave');
const clearanceDataAdmin = require('../Controllers/clearanceDataAdmin');

//Middlewares
const isLoggedIn = require('../Middleware/isLoggedIn');
const isFaculty = require('../Middleware/isFaculty');
const isAdmin = require('../Middleware/isAdmin');

//routing the controllers
route.post('/studentLogin', studentLogin);
route.post('/facultyLogin', facultyLogin);
route.post('/reportAdd', isLoggedIn, reportingAdd);
route.get('/userdetails', isLoggedIn, userDetails);
route.get('/reportingStudents', isLoggedIn, isFaculty, allResponsesFaculty);
route.get('/reportDetails/:reportId', isLoggedIn, isFaculty, specReportingData);
route.get('/approveReport/:reportId', isLoggedIn, isFaculty, approveReporting);
route.post('/rejectReport/:reportId', isLoggedIn, isFaculty, rejectReporting);
route.post('/createLeave', isLoggedIn, createLeave);
route.get('/allLeaves', isLoggedIn, isFaculty, allLeaves);
route.get('/getStatus', isLoggedIn, stateChecker);
route.post('/clearanceadd', isLoggedIn, clearanceCreate);
route.get('/allClear', isLoggedIn, isFaculty, allClearance);
route.get('/validClear/:clearId', isLoggedIn, isFaculty, validateClearance);
route.get('/rejClear/:clearId', isLoggedIn, isFaculty, rejectClearance);
route.get('/partClear', isLoggedIn, particularClearance);
route.post('/updateReport/:reportId', isLoggedIn, updatedReportingDetails);
route.get('/approveLeave/:leaveID', isLoggedIn, isFaculty, approveLeave);
route.get('/rejectLeave/:leaveID', isLoggedIn, isFaculty, rejectLeave);
route.get('/myLeave', isLoggedIn, myAllLeaves);
route.get('/adminClearance/:clearId', isLoggedIn, isFaculty, isAdmin, clearanceDataAdmin);

//exported Route
module.exports = route;
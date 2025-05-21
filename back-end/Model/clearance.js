const mongoose = require('mongoose');

const clearance = new mongoose.Schema({
    groupLeader:{
        type:String,
        required:true
    },
    groupMemberFirst:{
        type:String,
        required:true
    },
    groupMemberSecond:{
        type:String,
        required:true
    },
    groupMemberThird:{
        type:String,
        required:true
    },
    clearanceApproveFaculty:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"faculty"
    }],
    clearanceRejectFaculty:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"faculty"
    }],
    clearanceCreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
});

module.exports = mongoose.model("clearance",clearance);
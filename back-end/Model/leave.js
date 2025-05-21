const mongoose = require('mongoose');

const leave = new mongoose.Schema({
    fromDate:{
        type:String,
        required:true
    },
    tillDate:{
        type:String,
        required:true
    },
    reasonForLeave:{
        type:String,
        required:true
    },
    forStudent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    isLeaveApproved:{
        type:String,
        enum:["Approved","Pending","Rejected"],
        default:"Pending"
    }
});

module.exports = mongoose.model('leave',leave);

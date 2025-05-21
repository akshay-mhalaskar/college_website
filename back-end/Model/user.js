const mongoose = require('mongoose');

const user = new mongoose.Schema({
    userEmail:{
        type:String
    },
    userPassword:{
        type:String
    },
    reportingFilled:{
        type:Boolean,
        default:false
    },
    clearanceFilled:{
        type:Boolean,
        default:false
    },
    facultyAssigned:{
        type:String
    },
    reportingData:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reporting"
    },
    userLeaves:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"leave"
    }]
});

module.exports = mongoose.model('user',user);

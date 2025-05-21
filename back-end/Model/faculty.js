const mongoose = require('mongoose');

const faculty = new mongoose.Schema({
    userEmail:{
        type:String
    },
    userPassword:{
        type:String
    },
    allReportings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reporting"
    }],
    isAdmin:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('faculty',faculty);

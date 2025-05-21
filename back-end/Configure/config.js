const mongoose = require('mongoose');

const dbConnect = ()=>{
    mongoose.connect(process.env.URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log(`CONNECTION ESTABLISHED WITH DB`)
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = dbConnect;
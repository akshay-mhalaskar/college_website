const express = require('express');
const app = express();
const cors = require('cors');
const dbConnect = require('./Configure/config');
const route = require('./Routes/route');

app.use(express.json());
app.use(cors());
app.use('/api/v1',route);

require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`APP IS RUNNING AT ${PORT}`)
})
dbConnect();

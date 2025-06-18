const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const userRoute = require('./Routes/userRoute')
const Port = process.env.PORT || 8000
const bodyParser = require('body-parser');
const cors = require("cors");

mongoose.connect(process.env.DBCON).then(()=>{
    console.log("MongoDB connected");
    
})

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/user', userRoute)
app.listen(Port, ()=>{
    console.log(`server run on ${Port}`);
    
})


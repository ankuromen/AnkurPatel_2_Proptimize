const express=require("express")
var cors = require('cors')
var MongoClient = require('mongodb').MongoClient;
const mongoose=require("mongoose")
const app=express();
app.use(express.json())
const Users=require("./model/user");
const loginroutes=require("./routes/login")
const middleware =require("./middleware/middleware.js")

const dotenv = require('dotenv').config()
app.use(cors())

let dburl=process.env.DB_URL


mongoose.connect(dburl).then(()=>{
    console.log("Connected Successfuly")
}).catch((error)=>{
    console.log("Error Coonection DB",error);
});



app.use('/api',loginroutes)


  const PORT=process.env.PORT||5055;
app.listen(PORT,()=>{
    console.log("Server is Running on port "+ PORT )
})

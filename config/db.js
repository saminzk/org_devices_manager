const mongoose = require('mongoose');
require('dotenv').config();

let connectionString = process.env.DB_CONNECT_STRING ;
const db = async()=>{
    try{
        await mongoose.connect(connectionString);
        console.log("connected to Database");
    }catch(error){
        console.log(error);
    }
};

module.exports = db;

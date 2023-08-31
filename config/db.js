const mongoose = require('mongoose');
require('dotenv').config()

const db = async()=>{
    try{
        await mongoose.connect(process.env.DB_CONNECT_STRING);
        console.log("connected");
    }catch(error){
        console.log(error);
    }
};

module.exports = db;

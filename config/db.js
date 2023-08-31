const mongoose = require('mongoose');
require('dotenv').config()

const db = async()=>{
    try{
        const connectionString = process.env.DB_CONNECT_STRING;
        await mongoose.connect(connectionString);
        console.log("connected");
    }catch(error){
        console.log(error);
    }
};

module.exports = db;

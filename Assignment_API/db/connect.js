const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env["DB_URL"],{useNewUrlParser:true},function(err){
    if(err){
        console.log("cannot connect to database");
    }
    else{
        console.log("Database connection successfull");
    }
})
module.exports = mongoose;
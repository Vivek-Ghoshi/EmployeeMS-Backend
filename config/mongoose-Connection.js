const mongoose = require('mongoose');

const mongoURI = process.env.MONGOurl

mongoose.connect("mongodb://127.0.0.1:27017/EmployeeMSystem")
.then(function(){
    console.log('connected to DB')
})
.catch(function(error){
    console.log(error.message)
});

const db = mongoose.connection

module.exports = db;
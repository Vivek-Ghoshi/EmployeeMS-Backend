const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    email:String,
    password:String,
    name: String,
    task:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"taskSchema"
    }
   
});

module.exports = mongoose.model("employeeSchema",employeeSchema);
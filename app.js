const express = require('express');
const app = express();
const db = require('./config/mongoose-Connection');
require('dotenv').config();

const adminSchema = require('./models/adminModel');
const employeeSchema = require('./models/employeModel');
const taskSchema = require('./models/taskModel');


app.get("/",function(req,res){
    res.send('chal rha h bhai');
});

app.listen(3000 )
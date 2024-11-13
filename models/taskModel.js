const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({

    taskTitle: String ,
    description:String ,
    category: String ,
    active: Boolean,
    newTask: Boolean,
    completedTask: Boolean,
    failed: Boolean,
    taskDate: Date,
    employee: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"employeeSchema"
    }
});

module.exports = mongoose.model("taskSchema",taskSchema)
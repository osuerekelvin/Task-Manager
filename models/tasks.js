const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String, 
        required: true,
        unique : true,
        minlength : 3
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default : false,
    }
},
    { timestamps: true }
);

const tasks = mongoose.model('task', taskSchema);


module.exports = tasks
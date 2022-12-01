const Tasks = require('../models/tasks')
const asyncWrapper = require("../middleware/asyncWrapper");

//get all tasks '/taks'

const getTasks = asyncWrapper(async (req,res)=>{
        const tasks = await Tasks.find()
        res.status(200).json({number : tasks.length , data: tasks});
}); 

//create a task '/tasks req.body'
const createTask = asyncWrapper( async (req, res)=>{
    const {title, description} = req.body
    console.log(req.body);
    if(!title || !description) {
        return res.status(401).json({msg: "please provide necessary values"})
    }
        const task = await Tasks.create(req.body)
        //const task = await Tasks.create({title, description})
        res.status(201).json({data: task});
});

// get a single task '/tasks/:taskId req.params'
const getTask = asyncWrapper( async (req, res)=>{
        const {taskId} = req.params;
        const task = await Tasks.findById({_id: taskId});
        if(!task){
            return res.status(404).json({msg: `The Task with the id ${taskId} cannot be found`})
        }
        res.status(200).json({data: task});
});
//updating a task  '/tasks/:taskId req.params'
const updateTask = asyncWrapper( async (req,res)=>{
    
   
        const {taskId} = req.params;
    const {title, description, completed} = req.body
    const userBody = req.body;
        const updatedTask = await Tasks.findByIdAndUpdate({_id: taskId},userBody, {new: true, runValidators: true}
            );
        if (!updatedTask){
    return res.status(404).json({msg : `The Task with the id ${taskId} cannot be found`})
        }
        res.status(200).json({msg: "Task updated", data: updatedTask})
});


// deleting a task '/tasks/:taskId
const deleteTask = asyncWrapper( async (req,res) =>{
    
 
        const {taskId} = req.params;
        const task = await Tasks.findByIdAndDelete({_id: taskId})
        if (!task){
            return res.status(404).json({msg: `The Task with the id ${taskId} cannot be found`})
        }
        res.status(200).json({msg: "Task has been deleted" , data: task})
});

module.exports= {getTasks, createTask, getTask, deleteTask, updateTask }
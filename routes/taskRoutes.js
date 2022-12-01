const express = require("express")
const router = express.Router()
const {getTasks, createTask,getTask, deleteTask, updateTask} = require("../controller/taskController");


//get all tasks '/taks'

// router.get("/tasks", getTasks);

//create a task '/tasks req.body'
// router.post("/tasks", createTask)


// get a single task '/tasks/:taskId req.params'
// router.get("/tasks/:taskId", getTask )


//updating a task  '/tasks/:taskId req.params'
// router.patch("/tasks/:taskId", updateTask)

// deleting a task '/tasks/:taskId
// router.delete("/tasks/:taskId", deleteTask)  

router.route("/").get(getTasks).post(createTask);
router.route("/:taskId").get(getTask).patch(updateTask).delete(deleteTask)


module.exports= router;
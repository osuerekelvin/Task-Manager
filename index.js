const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv').config()
const PORT = process.env.PORT || 8000
const taskRouter = require('./routes/taskRoutes')
const routeNotFound = require("./middleware/404")
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors")


//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/tasks", taskRouter);
app.use(routeNotFound)
app.use(errorHandler)






mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT} ... and  DB CONNECTED`);
    })
}).catch((err) => console.log(err))


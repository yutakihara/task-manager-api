const express = require('express')
require('./db/mongoose') // to execute the connection to database
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

// app.use() is to register some features
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app
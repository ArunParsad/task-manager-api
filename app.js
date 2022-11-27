const express = require('express')
const app = express()
const router = require('./routes/routes')
require('dotenv').config()
const connectDB = require('./connect/connect')

app.use(express.json())
app.use('/api/v1/tasks', router)

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000)
    } catch (error) {
     console.log(error);   
    }
}

start()

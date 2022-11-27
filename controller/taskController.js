const taskModel = require('../models/taskModel')

// get all task
const getAllTask = async (req, res)=>{
    try {
        const allTask = await taskModel.find();
        res.status(200).json({tasks: allTask})
    } catch (error) {
        res.json({messgae: error})
    }
   
}
//get single task
const getTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params
    const task = await taskModel.findOne({_id:taskID})
    if(!task){
        return res.status(404).json({messgae:`no task with id: ${taskID}`})
    }
    res.status(200).json({task})
    } catch (error) {
        res.status(500).json({messgae: error})
    }
}

// create task
const createTask = async (req, res)=>{
    try {
        const task = await taskModel.create(req.body)
        res.status(201).json({task}) 
    } catch (error) {
        res.status(500).json({messgae: error})
    }
    
}

// update task
const updateTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params
        const task = await taskModel.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({messgae:`no task with id: ${taskID}`})
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({messgae: error})
    }
}
// delete task
const deleteTask = async (req, res)=>{
   try {
    const {id:taskID} = req.params
    const task = await taskModel.findOneAndDelete({_id:taskID})
    res.status(200).json({task})

   } catch (error) {
    res.status(500).json({messgae: error})
   }
}

module.exports = {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask
}
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'must provide name'],
        trim:true,
        maxlength:[20, 'title can not be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const taskModel = mongoose.model('tasks', taskSchema);

module.exports = taskModel
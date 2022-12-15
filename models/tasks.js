const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'cannot be empty'],
        trim:true,
        maxLength:[20,'cannot be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model("Task",taskSchema);   
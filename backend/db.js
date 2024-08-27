const mongoose =require("mongoose");


// mongodb+srv://hitikadwani0902:zJOJjNxhspkpuF8G@cluster0.yjbfh.mongodb.net/todos


mongoose.connect("mongodb+srv://hitikadwani0902:zJOJjNxhspkpuF8G@cluster0.yjbfh.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const todo= mongoose.model('todos',todoSchema);
module.exports = {
    todo
}


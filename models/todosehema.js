
const {Schema,model} = require('mongoose')

const todoschema = new Schema({
    title:{
        type:String,
        required:true,
    },
    discription:String,
    status:{
        type:String,
        enum:["active","inactive"]
    },
    date:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})
const Todo = model('Todo',todoschema)
module.exports = Todo;
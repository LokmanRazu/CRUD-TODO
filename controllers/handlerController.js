const Todo = require('../models/todosehema')


exports.todoGetAllController = async (req,res,next)=>{

}


exports.todoGetSingleController = async (req,res,next)=>{
    
}


exports.todoPostController = async (req,res,next)=>{
    try{
        const newTodo = new Todo(req.body)
        await newTodo.save((err)=>{
            if(err){
                res.status(500).json({
                    error:"There is A server side error"
                })
            } else {
                res.status(200).json({
                    message:"Todo is insert successfully"
                })
            }
        })
        console.log('Todo App created successsfully')
    }catch(e){
        console.log(e)
        next()
    }

}

exports.todoPostAllController = async (req,res,next)=>{
    try{
        await Todo.insertMany(req.body,(err)=>{
            if(err){
                res.status(500).json({
                    error:"There is A server side error"
                })
            }else{
                res.status(200).json({
                    message:"Todo are insert successfully"
                })
            }
        })
    }catch(e){
        console.log(e)
        next()
    }
}




exports.todoPutController = async (req,res,next)=>{
    try{
        await Todo.findByIdAndUpdate({_id:req.params.id},{$set:{status:"inactive"},},
        (err)=>{
            if(err){
                res.status(500).json({
                    error:"There is A server side error"
                })
            }else{
                res.status(200).json({
                    message:"Todo are update successfully"
                }) 
            }
        })
    }catch(e){
        console.log(e)
        next(e)
    }
}


exports.todoDeleteController = async (req,res,next)=>{
    try{
        await Todo.deleteOne({_id:req.params.id},{$set:{status:"inactive"},},
        (err)=>{
            if(err){
                res.status(500).json({
                    error:"There is A server side error"
                })
            }else{
                res.status(200).json({
                    message:"Todo are delete successfully"
                }) 
            }
        })
    }catch(e){
        console.log(e)
        next(e)
    }
}

// There might be Some error With Async Await
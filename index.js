const express = require('express');
const app = express();
const mongoose = require('mongoose')
const todoHandler = require('./routes/handlerRoutes')


app.use(express.json())
app.use(express.urlencoded({ extended: true }),)

app.get('/',(req,res)=>{
    res.send('hello World')
})

app.use('/todo',todoHandler)

// Default Error handler
function errorHandler(err,req,res,next){
    if(res.headerSent){
        return next(err)
    }
    res.status(500).json({error:err})
}


const PORT = process.env.PORT ||8080;
mongoose.connect(`mongodb+srv://TestWLWS:9Nq4s6JbUZBrtC2R@cluster0.pnxzb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true })
    .then(() => {
        console.log('Database connected')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }).catch(e => {
        console.log(e)
    })

    // There might be Some error With Async Await.
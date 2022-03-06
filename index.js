const express = require('express');
const app = express();
const mongoose = require('mongoose')

app.get('/',(req,res)=>{
    res.send('hello World')
})


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
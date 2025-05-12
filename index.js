const express =require('express')
const cors =require('cors')
const app =express()
const Cat =require('./Cat.json')
const port =process.env.PORT || 3000;

app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send("My First Practice Server")
})

app.get('/Cat',(req,res)=>{
    res.send(Cat)
})

app.post('/Cat',(req,res)=>{
    console.log("cat user post method",req.body)
    const newUser =req.body;
    Cat.push(newUser)
})

app.listen(port ,()=>{
    console.log(`server is running at:${port}`)
})
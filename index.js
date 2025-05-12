const express =require('express')
const app =express()
const port =process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send("My First Practice Server")
})

app.get('./Cat.json',(req,res)=>{
    res.send('./Cat.json')
})

app.listen(port ,()=>{
    console.log(`server is running at:${port}`)
})
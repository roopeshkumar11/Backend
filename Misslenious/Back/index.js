const express =require("express")
const app=express()
const port =8080


app.use(express.urlencoded({extended:true}))  // data access from body

app.use(express.json( ))
app.post("/register",(req,res)=>{

    let {user,password}=req.body
    res.send(`Stander post reponse ${ user}`)
})

app.get("/register",(req,res)=>{

       let {user,password}=req.query
    res.send(`Stander get reponse ${ user}`)
})



app.listen(port,()=>{
    console.log(`port is ${port}`)
})



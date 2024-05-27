const express=require("express")

const app=express()

// const path=require("path")

let port =8080


app.set("view engine","ejs")

// app.set("views" ,path.join(__Ejs,"/views"))  //run code out side this directory


app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/rolldice",(req,res)=>{

    let dicvalue=Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs" ,{dicvalue})     // pass data to ejs
})


app.get("/ig/:username",(req,res)=>{
   
    let {username}=req.params
    const  follower=['ajay','vikaram','nikhil']

    res.render  ("instgram.ejs",{username,follower})
})
app.listen(port,()=>{
console.log(`listening ${port}`)
})
const express=require("express")
const path = require("path");


const app=express()

let port=8080
app.listen(port,()=>{
    console.log(`port is ${port}`)
})

app.use(express.static(path.join(__dirname,"public/style")))
app.use(express.static(path.join(__dirname,"public/js")))

app.set("views engine","ejs")
app.set("views", path.join(__dirname, "/views"));

app.get("/",(req,res)=>{

    res.send("hello")
})


app.get("/ig/:username",(req,res)=>{
    let {username}=req.params
    const instadata=require("./data.json")
     const data=instadata[username]
     console.log(instadata)
    if(data){
        res.render("insta.ejs",{data}) 
    }
    
    else{
        res.render("error.ejs")
    }

})
const express=require("express")
const app=express()

const mongoose=require("mongoose")
const path=require("path")
const Chat=require("./models/chat.js")
const methodOverride=require("method-override")  //convert post into put
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))   // data convert 
app.use(methodOverride("_method"))

app.set("views",path.join(__dirname,"views"))   // join  view ejs
app.set("views engine","ejs")
main()
.then(()=>{
    console.log("run successfuly")
})

.catch((err)=>{
    console.log(err)
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")    // connect to mongodb
}

// let chat1= new Chat({from:"neha",to:"sejal",msg:"hello",created_at: new Date()})


// chat1.save().then((res)=>{console.log(res)})
// .catch((err)=>{
//     console.log(err)
// })

app.get("/",(req,res)=>{
    res.send("start")
})

//index route show chat

app.get("/chats", async (req,res)=>{
    let chats= await Chat.find()
  
    res.render("index.ejs",{chats})
})

app.get("/chats/new",(req,res)=>{

    res.render("new.ejs")
})

app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body
    let newchat=new  Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    })

   
    newchat.save()
    .then((res)=>{
        console.log("new data inserrt !!!!!!!!",res)
    })
.catch((err)=>{
    console.log(err)
})
res.redirect("/chats")
})


// edit data
app.get("/chats/:id/edit", async (req,res)=>{

    let {id}=req.params
    let chat= await Chat.findById(id)
    res.render("edit.ejs",{chat})
})

// update route
app.put("/chats/:id", async (req,res)=>{
    let {id}=req.params
    let {msg:newmsg}=req.body
   
    let uppdatechat= await Chat.findByIdAndUpdate(id,{msg:newmsg},
    {runValidators:true, new:true})
  res.redirect("/chats")
})

//delete data
app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params
    let delt= await Chat.findByIdAndDelete(id)
   res.redirect("/chats")
})


let port=8080
app.listen(port,()=>{
    console.log(` port is ${port}`)
})

const express=require("express")
const app=express()
const port =8080 


app.use(express.urlencoded({express:true}))
const path=require("path")
app.set("views engine", "ejs")
app.set("views",path.join(__dirname,"views"))
const {v4:uuidv4}=require("uuid")  //create unique id
const methodOverride=require("method-override")  // it use override the request such use form post req convert into patch

app.use(express.static(path.join(__dirname,"public")))
app.use(methodOverride("_method"))
let posts=[

  {  id:uuidv4(),
    username:"apnacolloage",
    content:"i love coding"},

    {id:uuidv4(),
          username:"rooop",
    content:"hard work"},

    {  id:uuidv4(),
        username:"rahul",
    content:"i get selected"}
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})


app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})
app.post("/posts",(req,res)=>{
    // res.render("index.ejs",{posts})
    let {username,content}=req.body

    let id=uuidv4()
    posts.push({id,username,content})
    // res.send("post submit")
    res.redirect("/posts")  //pass the url
})

app.get("/posts/:id",(req,res)=>{
    
    let { id }=req.params
    console.log(id)
    let post=posts.find((p)=>id===p.id)
    res.render("show.ejs",{post})
})

app.patch("/posts/:id",(req,res)=>{
    let { id }=req.params
    let newcontent=req.body.content
    console.log(id)
    let post=posts.find((p)=>id===p.id)
    post.content=newcontent
    res.redirect("/posts")
    
})
app.get("/posts/:id/edit",(req,res)=>{
    let { id }=req.params
    let post=posts.find((p)=>id===p.id)
    res.render("edit.ejs",{post})
    
    
    
}) 

app.delete("/posts/:id",(req,res)=>{
    let { id }=req.params
     posts=posts.filter((p)=>id!==p.id)
     res.redirect("/posts")
})



app.listen(port,()=>{ 
    console.log("listening port 8080")
})
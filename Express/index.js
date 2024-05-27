const express=require("express")

const app=express()

console.dir(app)

let port=3000  //8080
app.listen(port,()=>{
    console.log("appp is listen on port",port)
})


app.use((req ,res)=>{
    console.log("recive")

    // res.send("this is basic repose") send setnace

    // res.send({            // send object
    //     name:"apple",
    //     color:"red"
    // })

    // res.send("<h1> Html tag<h1/>")   //send response in html form




    app.get("/",(req,res)=>{
        res.send("root path")
    })


    app.get("/orange",(req,res)=>{
        res.send("root  aorange path")
    })


    app.get("/apple",(req,res)=>{
        res.send("root apple path")
    })

    app.get("*",(req,res)=>{
        res.send("path not exist")
    })
})
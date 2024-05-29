

const express=require("express")
const app=express()
const { faker } = require('@faker-js/faker');  //GENERATE FAKE DATA SET
const mysql=require('mysql2')
const  path=require("path")
const methodOverride=require("method-override");

app.use(methodOverride("_method"))
app.set("views engine","ejs")
app.set("views",path.join(__dirname,"/views"))
app.use(express.urlencoded({extended:true}))
const connection=mysql.createConnection({    //ACCESS DATA FROM WORKBENCH
    host:"localhost",
    user:"root",
    database:"DELTA_APP",
    password:"AIML22088"
})

let getRandomuser=()=>{
  return [
    faker.string.uuid(),
    faker.internet.userName(),
 faker.internet.email(),
     faker.internet.password(),
   
  ]
}
// let q="INSERT INTO user (id,username,email,password) VALUES ?" // ? IS PLACEHOLDER

// let users=[["123b","123_newusernb","abc@gmail.comb","abcb"],
// ["123c","123_newusernc","abc@gmail.comc","abcc"]]
let data=[]

for (let i = 0; i <100; i++) {
 
  data.push(getRandomuser())
  
}


//home route

app.get("/",(req,res) =>{
  let q=`SELECT count(*) FROM USER`;
  

  try{
    connection.query(q,(err,result)=>{
    if(err) throw err;
    let totaluser=result[0]["count(*)"]
   res.render("home.ejs",{totaluser})
    
});
} catch(err){ 
   
    res.send("SOMEE Error")
}

})

//show 


app.get("/user",(req,res) =>{
  let q=`SELECT * FROM USER`;
  

  try{
    connection.query(q,(err,users)=>{
    if(err) throw err;
    
  res.render("show.ejs",{users})
    
});
} catch(err){ 
  
    res.send("SOMEE Error")
}

})

//edit
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params

  
  let q=`SELECT * FROM USER WHERE id='${id}'`;

  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
    let user=result[0]
       res.render("edit.ejs",{user})
    })
  }
  catch(err){ 
    console.log(err)
    res.send("SOMEE Error")
}

})
//update
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params

  let {password:newpassword,username:newusername}=req.body
  let q=`SELECT * FROM USER WHERE id='${id}'`;
  

  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user=result[0]
     
      if(newpassword != user.password){
        res.send("wrong password")
      }
      else{
        let q=`UPDATE USER SET username='${newusername}' WHERE id='${id}'`
        connection.query(q,(err,result)=>{
          if(err) throw err;
          res.redirect("/user")
        })
      }

    })
  }
  catch(err){ 
    
    res.send("SOMEE Error")
}
})

//delete
// app.delete("/user/:id",(req,res)=>{
//   let {id}=req.params
//   console.log(id)

//   let q=`DELETE  FROM USER WHERE id='${id}'`

//   try{
//     connection.query(q,(err,result)=>{
//       if(err) throw err
//     res.redirect("/user")
//     // res.send("de")
//     })
    

//   }
//   catch(err){ 
//     console.log(err)
//     res.send("SOMEE Error")
// }
// })



//delete
app.post("/user/:id/delete",(req,res)=>{
 
  let {id}=req.params
  let q=`SELECT * FROM USER WHERE id='${id}'`

  try{
    connection.query(q,(err,result)=>{
 let user=result[0]

 res.render("delete.ejs",{user})
    })
  }
  catch(err){
    res.send("some")
  }
})

app.delete("/user/:id",(req,res)=>{
    let {id}=req.params
    let {password:delpassword}=req.body
    console.log("del",delpassword)
    let q=`SELECT * FROM USER WHERE id='${id}'`;
    
    console.log("id",id)
  
  
  
    try{
      connection.query(q,(err,result)=>{
        if(err) throw err
        let user=result[0]
        console.log("original",user.password)
        if(delpassword !=user.password){
          res.send("wrong password")
        }
        else{
          let q2=`DELETE  FROM USER WHERE id='${id}'`
          connection.query(q2,(err,result)=>{
            if(err) throw err
            res.redirect("/user")
          })

        }
      })
      
  
    }
    catch(err){ 
      console.log(err)
      res.send("SOMEE Error")
  }
  })


  // add data in database
  app.get("/user/add", (req, res) => {
   let data=req.params
console.log(data)
    res.render("Add.ejs");
});

let port=8080
 app.listen(port,()=>{
  console.log("port is 8080")
 })

 
const mongoose=require("mongoose")



main().then(()=>{console.log("succeefully run")})
.catch((err)=>{console.log(err)})
async function main(){
    await  mongoose.connect("mongodb://127.0.0.1:27017/amazon")
}


const Bookschema= new mongoose.Schema({
    title:{
        type:String,
        require:true     // require is give data is require
    },
    author:{
        type:String
        
    },
    price:{
        type:Number,
        default :0 // set default value
       
    }
})


const Book=mongoose.model("Book",Bookschema)


// let book1=new Book({title:"math",author:"Rd",price:1234})
// let book1=new Book({title:"science",author:"Rds"})


// book1.save()
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)

// })

//upadte
Book.findByIdAndUpdate("66598d0cf7726d505468fdb9",{author:"ncert"})
.then((res)=>{
    console.log(res)
   })
   .catch((err)=>{
       console.log(err) 
   })
   
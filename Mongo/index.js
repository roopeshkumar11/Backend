const mongoose=require("mongoose")


main().then(()=>{console.log("succeefully run")})
.catch((err)=>{console.log(err)})
async function main(){
    await  mongoose.connect("mongodb://127.0.0.1:27017/test")
}

const userschema=new mongoose.Schema({
    name:String,
    email: String,
    age:Number
})

const User=mongoose.model("User",userschema)

//insert one   data
// const user1= new User({name:"rocky",email:"roope@gmail.com",age:89})
// const user2= new User({name:"rakesh",email:"rakesh@gmail.com",age:78})
// user1.save()
// user2.save()


//insert  many  data

// User.insertMany([{name:"tony",email:"tony@gamil.com",age:"34"},
// {name:"sony",email:"sony@gamil.com",age:"24"},
// {name:"rony",email:"rony@gamil.com",age:"14"}
// ]).
// then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// find data

// User.find({name:"rony"}).then((data)=>{
//     console.log(data)
// })


// User.find({name:"rony" ,age:{$lt:70}}).then((data)=>{
//     console.log(data)
// })

// User.find({age:{$lt:70}}).then((data)=>{
//     console.log(data[0].name)
// })

// User.findById('6658c1462ebfdc6e8fb01907').then((data)=>{
//     console.log(data.name)
// })
// User.updateMany({name:"sony"},{name:"radha"}).then((data)=>{
//     console.log(data)
// })


// retrun jo data upadate karna hai
User.findOneAndUpdate({name:"radha"},{age:90})
.then((data)=>{
    console.log(data)
})

// upadate data retrun
User.findOneAndUpdate({name:"radha"},{age:90},{new:true})
.then((data)=>{
    console.log(data)
})

User.deleteOne({name:"radha"}).then((data)=>{  //you can use  findByidDelete() and findOneAndDelete() same as findoneandupadat
    console.log(data)
})
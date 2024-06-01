const mongoose=require("mongoose") 
const Chat=require("./models/chat.js")
main()
.then(()=>{
    console.log("run successfuly")
})

.catch((err)=>{
    console.log(err)
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}


let Allchat=[
    {from:"saneha",
    to:"kajal",
    msg:"byy",
    created_at: new Date()},

    {from:"sndhya",
    to:"pooja",
    msg:"gn",
    created_at: new Date()},



    {from:"kriti",
    to:"kshish",
    msg:"gm",
    created_at: new Date()}
]

 Chat.insertMany(Allchat )




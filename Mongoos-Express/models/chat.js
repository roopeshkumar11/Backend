 const mongoose=require("mongoose")


 const chatschema=new mongoose.Schema({
    from:{
        type:String,
        require:true
    },

    to:{
        type:String,
        require:true
    },
    msg:{
        type:String,
        maxLength:50
    },
    created_at:{
        type:Number,
        require:true
    }
    
 })

 const Chat= mongoose.model("Chat",chatschema)
 module.exports=Chat
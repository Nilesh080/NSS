const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/EjsChallenge")
.then(()=>{
    console.log("Mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})


const collection=new mongoose.model("LogInCollection",LogInSchema)
module.exports=collection
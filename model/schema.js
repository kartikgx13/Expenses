import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.models.User || mongoose.model('User',userSchema)
//what the above line of code does is that if there is already a scheman present we return it 
//or else we create a new schema using userSchema function
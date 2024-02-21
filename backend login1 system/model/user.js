import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:Number,
        required:true,
        minlength:6,
    },

     
    });
export default mongoose.model("user", userSchema);

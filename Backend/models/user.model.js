//model to make the format

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        index:true,
        unique:true //unique goes with index ---> We want email to be unique
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        index:true,
        unique:true
    }
})

export const USERS = mongoose.model('USERS',userSchema)
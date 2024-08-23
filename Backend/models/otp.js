const mongoose = require("mongoose");

const otpSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        repiress:5*60,
    }
});

// Schema ke bad model ke pahile , becausse of middleware
//write here email send code

module.exports=mongoose.model("OTP",otpSchema);
const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    lastname:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    accountType:{
        type:String,
        enum:["Admin","Student","Instructor"],
        require:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile"
    },
    courses:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    image:{
        type:String,
        required:true
    },
    courseProgress :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courseProgress"
    },
    contactNumber :{
        type:Number,
        required:true
    },
    confirmPassword :{
        type:String,
        required:true
    }
    
});

module.exports= mongoose.model("User",userSchema);
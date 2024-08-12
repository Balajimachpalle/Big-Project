const mongoose= require("mongoose");

const courseSchema= new mongoose.Schema({
    courseName:{
        type:String
    },
    courseDescription:{
        type:String
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    price:{
        type:Number
    },
    studentEnrolled:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    
});

module.exports=mongoose.model("course",courseSchema);
const mongoose = reqire ("mongoose");

const courseProgressSchema= new mongoose.Schema({
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courseId"
    },
    completeVideo:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subSection"
    }]
});

module.exports=mongoose.model("courseProgress",courseProgressSchema);
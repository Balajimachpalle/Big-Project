const mongoose = reqire ("mongoose");

const subSectionSchema= new mongoose.Schema({
    tittle:{
        type:String
    },
    timeDuration:{
        type:String
    },
    description:{
        type:String
    },
    videoUrl:{
        type:String
    }
});

module.exports=mongoose.model("subSection",subSectionSchema);
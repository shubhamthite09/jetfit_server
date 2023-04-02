const mongoose = require("mongoose")

const workoutSchema = mongoose.Schema({
    name:{type:String,required:true},
    exe:{type:String,required:true},
    set:{type:Number,required:true}
})

const workModle = mongoose.model("plane",workoutSchema)

module.exports={workModle}
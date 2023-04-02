const mongoose = require("mongoose")

const excerciSchema = mongoose.Schema({
    topic:{type:String},
    sdis:{type:String},
    simg:{type:String},
    gif:{type:String},
    timg:{type:String},
    targetimg:{type:String},
    topic:[String]
})

const exeModle = mongoose.model("workout",excerciSchema)

module.exports={exeModle}

const express = require("express")
const {exeModle} = require("../config/exceiceModle")

const exeRouter = express.Router()
exeRouter.use(express.json())


exeRouter.get("/",async(req,res)=>{
    try{
        let data = await exeModle.find()
        res.send(data)
    }catch(err){
        res.json({err:err.messege})
    }
})


module.exports={exeRouter}
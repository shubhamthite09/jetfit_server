const express = require("express")
const {workModle} = require("../config/workoutModle")

const workoutRouter = express.Router()
workoutRouter.use(express.json())

workoutRouter.post("/",async(req,res)=>{
    try{
        let post = new workModle(req.body)
        await post.save()
        res.send({msg:`new exe has added to db ...`})
    }catch(err){
        res.json({err:err.messege})
    }
})

workoutRouter.get("/",async(req,res)=>{
    try{
        let temp = await workModle.find({name:req.body.name})
        res.send(temp)
    }catch(err){
        res.json({err:err.messege})
    }
})
workoutRouter.get("/pro",async(req,res)=>{
    try{
        let manyData=[
            {name:req.body.name,exe:"6428f9a5bd885ebe63091c0c",set:5},
            {name:req.body.name,exe:"6428f9a5bd885ebe63091c13",set:9},
            {name:req.body.name,exe:"6428f9a5bd885ebe63091c0b",set:2},
            {name:req.body.name,exe:"6428f9a5bd885ebe63091c0f",set:4},
            {name:req.body.name,exe:"6428f9a5bd885ebe63091c10",set:5},
            {name:req.body.name,exe:"6428f9a5bd885ebe63091c15",set:3},
            {name:req.body.name,exe:"6428f9a5bd885ebe63091c0e",set:1}
        ]
        workModle.insertMany(manyData).then(function(){
            console.log("Data inserted")
            res.send({msg:`new exe has added to db ...`})  // Success
        }).catch(function(error){
            console.log(error)      // Failure
        });
    }catch(err){
        res.json({err:err.messege})
    }
})

workoutRouter.delete("/:id",async(req,res)=>{
    try{
        await workModle.findByIdAndDelete({_id:req.params.id})
        res.send({msg:`excersice is deleted ..`})
    }catch(err){
        res.json({err:err.messege})
    }
})

module.exports={workoutRouter}
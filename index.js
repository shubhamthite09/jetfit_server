require("dotenv").config()
const {connection} = require("./config/connect")
const {userRouter} = require("./route/user")
const {workoutRouter} = require("./route/workout")
const {exeRouter} = require("./route/execies")
const {validate} = require("./middleware/validater")
const express = require("express")
const cros = require("cors")
const app = express()
app.use(express.json())
app.use(cros())
app.use("/user",userRouter)
app.use("/exe",exeRouter)
app.use("/work",validate,workoutRouter)

app.get("/",(req,res)=>{
    res.json({msg:"welcome to jetfit backend server"})
})

app.listen(process.env.PORT,async(req,res)=>{
    try{
        await connection
        console.log(`connected to DB ....`)
    }catch(err){
        console.log({err:err.messege})
    }
    console.log(`server is runing on port ${process.env.PORT}`)
})
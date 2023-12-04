
const express = require("express")
require("dotenv").config()

const {UserModel} = require("../models/usermodel")


const userRouter = express.Router()


userRouter.post("/contacts", async(req, res) => {
    try {
        const data = new UserModel({...req.body})
        await data.save()

        res.status(200).json({"msg" : "post added"})
        
    } catch (error) {
         res.status(400).json({error : error.message})
    }
})


userRouter.get("/", async(req, res) => {
    try {
        const data = await UserModel.find()
        res.status(200).send(data)
        

      
        
    } catch (error) {
         res.status(400).json({error : error.message})
    }
})

userRouter.get("/singledata/:id", async(req, res) => {
    const {id} = req.params
    try {
        const data = await UserModel.findOne({_id : id})
        res.status(200).send(data)
        

      
        
    } catch (error) {
         res.status(400).json({error : error.message})
    }
})

// patch
userRouter.patch("/update/:id", async(req, res) => {
    const {id} = req.params
    try {
        
        let data = await UserModel.findByIdAndUpdate({_id : id}, req.body)

        res.status(200).json({"msg" : "post updated", data})
        
    } catch (error) {
         res.status(400).json({error : error.message})
    }
})

// delete
userRouter.delete("/delete/:id", async(req, res) => {
    const {id} = req.params
    try {
        
        let data = await UserModel.findByIdAndDelete({_id : id}, req.body)

        res.status(200).json({"msg" : "post deleted"})
        
    } catch (error) {
         res.status(400).json({error : error.message})
    }
})







module.exports = {
    userRouter
}
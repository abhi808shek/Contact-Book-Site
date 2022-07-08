const create_signup_user = require("../controllers/Signup_Controller")
const express = require("express")
const signup_router = express.Router()
const Signup_Model = require("../models/Signup_Model");
const jwt = require('jsonwebtoken');



signup_router.post("/signup",async(req,res)=>{
    try {
    const id = req.params.id
        const create_user= new Signup_Model(req.body)
        await create_user.save();
        if (!create_user) {
            return res.status(401).json({message:"Network Error"}) 
        }
        const accessToken = jwt.sign({id:id},"dfzfdnsdfisfjsdfjksmfkfjfmfbvhdfbfnf",{expiresIn:"7d"})
        res.status(200).json({
          status:"success",
          accessToken:accessToken
        })
        
    } catch (error) {
        res.status(500).send(error.message);
    }})



module.exports = signup_router;
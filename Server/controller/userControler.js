const express  = require('express')
const router=express.Router()
const jwt =require('jsonwebtoken') 


const getUser =(req,res)=>{
    const { userName, userId }=req.body
    console.log("user data..",req.body)


    res.status(200).json({message:"user"})

}


module.exports={getUser}

const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')
const task = require('../model/task')
const users = require('../model/users')


// ---------------CREATING USERS AND TASKS-------------------------------//

const adminLogin =(req,res)=>{
    console.log("admin login..",req.body)
    res.status(200).json({message:"admin"})

}


const createUser =(req,res)=>{
    console.log("post admin",req.body)
}

const viewUsers =(req,res)=>{
    console("gaet all users")
}


const creatingTasks = (req,res) =>{
    console.log("creating task ")
}

// -------------------ADMIN DASHBOARD GET ALL DETAILS--------------------//

const adminDashboard = (req,res)=>{
    console.log("get all details for admin dash board")
}



module.exports={adminLogin,createUser,viewUsers,creatingTasks,adminDashboard}









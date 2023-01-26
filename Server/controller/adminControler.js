
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')
const task = require('../model/task')
const users = require('../model/users')


// ---------------CREATING USERS AND TASKS-------------------------------//
// ADMIN PASSWORD AND USERNAME
const Username="ananthu"
const Password="123"
// ---------------------------------------------------------------------//


const adminLogin =(req,res)=>{

    console.log("entered admin longi")
    // process.env.

    const {userName,password}=req.body
    try{
        if(userName===Username){

            if(Password===password){
                const token = jwt.sign(
                    {username:userName,auth: true},
                    "process.env.JWT_ADMIN_SECRET_KEY", {
                    expiresIn: "10m",
                })

                res.json({ Admintoken: token, auth: true })
                console.log("admin verified")
            }
            else{
                res.status(401).json({error:"Incorrect Passwoard"})
                console.log("incorrect password")

            }
        }
        else{
         res.status(401).json({error:"Incorect username"})
         console.log("Incorect username")
      }
    }
    catch(error){
        res.status(500).json({error:"server error"})
        console.log("server error",error)
    }
  
}


const createUser =async(req,res)=>{
    console.log("post admin",req.body)

    const user = new users({
        username:req.body.userName,
        password:req.body.password
    })
    user.save().then((user)=>{
        console.log("user saved..",user)
    })
      console.log("newly inseted user..",user)
     res.status(200).json(user)



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









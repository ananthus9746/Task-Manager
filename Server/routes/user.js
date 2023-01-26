const express  = require('express')
const router=express.Router()
const {getUser} = require('../controller/userControler')



router.post('/login',getUser)


module.exports=router
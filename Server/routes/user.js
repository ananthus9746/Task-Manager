const express  = require('express')
const { verifyUser } = require('../Authentication/UserAuth')
const router=express.Router()
const {userLogin} = require('../controller/userControler')



router.post('/login',userLogin)

router.get('/tasks/:id/:status',verifyUser,)//getTasks

router.put('/updateStatus',verifyUser,)//update


module.exports=router
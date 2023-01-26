const express  = require('express')
const router=express.Router()
const {adminLogin,createUser,viewUsers,creatingTasks,adminDashboard} = require('../controller/adminControler')



router.post('/login',adminLogin)
router.post('/createUser',createUser)
router.get('/view-user',viewUsers)
router.post ('/create-task' ,creatingTasks)

router.get('admin-dashboard',adminDashboard)



module.exports=router
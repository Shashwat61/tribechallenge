const router=require('express').Router()
const userController=require('../controllers/Usercontroller')

router.post('/login',userController.login)

module.exports=router
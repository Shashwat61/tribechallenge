const router=require('express').Router();
const UserRouter=require('./UserRouter')

router.use('/users',UserRouter)
router.get('/',(req,res)=>res.send(`<h1>Hello World</h1>`))



module.exports=router;
const UserModel=require('../db/UserModel')
const jwt=require('jsonwebtoken')
const transporter=require('../utils/sendEmail')
require('dotenv').config()

module.exports={
    login: async function(req,resp){
        console.log(req.body.email)
        try{
              const res=await UserModel.findOne({email:req.body.email}).lean()

              if(!res){
                  const data={
                        name:req.body.name,
                        email:req.body.email,
                        image:req.body.image
                  }
                  console.log(data,'datareceived')
                  const newUser=new UserModel(data)
                  newUser.save().then((doc)=>{
                      const user={
                          id:doc._id,
                            name:doc.name,
                            email:doc.email,
                            image:doc.image
                      }
                      console.log(user,'usermade')
                      const accessToken=jwt.sign(user,'secret', { expiresIn: '24h' });
                      resp.status(200).json({
                          accessToken
                      })
                  })
                  const mailData = {
                    from: process.env.EMAIL,  
                      to: req.body.email,  
                      subject: 'Welcome message',
                      html: '<b>Hey there! Welcome to our service</b>'
                    };
                transporter.sendMail(mailData, function(err, info){
                    if(err){
                        console.log(err)
                    }
                    else console.log(info)
                })
              } else {        
                const user = { 
                    id: res._id, 
                    name: res.name,  
                    email: res.email,
                    image: res.image
                  }
                 // console.log(user);
                  
                const accessToken = jwt.sign(user, 'HS256', {expiresIn: '24h'});
               // console.log(accessToken);
                resp.status(200).json({
                    accessToken
                });   
        }  
        }catch(e){
            resp.send(e)
        }
    }
}
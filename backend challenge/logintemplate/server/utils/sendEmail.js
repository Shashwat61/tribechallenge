const nodemailer=require('nodemailer')
require('dotenv').config()


const transporter = nodemailer.createTransport({
    port: 465,               
    host: "smtp.gmail.com",
       auth: {
            user: process.env.EMAIL, // senders email
            pass: process.env.PASSWORD, // senders password
         },
    secure: true,
    });
    module.exports=transporter

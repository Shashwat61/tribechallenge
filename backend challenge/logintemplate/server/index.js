const express=require('express')
const app=express()
const router=require('./routes/routes')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config()


app.listen(5000,(req,res)=>{
    console.log('server is running')
})


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',router)

mongoose.Promise=global.Promise
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
//  mongoose.set('useCreateIndex', true)

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true })
    .then(() => { console.log('Connected to MongoDB: %s \n ', process.env.MONGODB_URI) }) 
    .catch((err) => { console.log('MongoDB connection error: %s \n', err); })

   




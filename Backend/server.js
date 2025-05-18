import express from 'express'
import dotenv from "dotenv";
import mongoose from 'mongoose';
import { router } from './routes/users.routes.js';
import cors from "cors";
import { productRouter } from './routes/products.routes.js';


dotenv.config()

const PORT = process.env.PORT||3001
const MONGODB = process.env.MONGODB

const app = express()
app.use(cors())

try {
    mongoose.connect(MONGODB)
    console.log('DataBase Connected')
} catch (err) {
    console.log(err)
}


app.get('/', (req,res)=>{
    res.send('Workiingg')
})

app.use(express.json()) //For req.body to work express.json() must be used // As req.body is an object and server understands only strings so express.json() is  used to stringify req.body

// app.post('/post', (req,res)=>{
//     const name = req.body.name
//     res.send(name)
// })


app.use(router)//This is same as above we broke down the code into multiple different files
app.use(productRouter)


//app.use(express.json(),router) //to do it just for router

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
})
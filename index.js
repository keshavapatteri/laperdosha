
import express from 'express'
import apiRouter from './ROUTES/index.js';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';


const app = express()
//middle ware
app.use(express.json())

app.use(cookieParser());
const port = process.env.PORT;

connectDB();

app.get('/',(req,res)=>{  
res.send('hello world')
   
})

app.use('/api',apiRouter)


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
    
})
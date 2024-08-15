import express from 'express'
const router = express.Router()

router.get('/',async(req,res,next)=>{
    console.log('payment get method is accessed');
    
});

router.post('/',async(req,res,next)=>{
    console.log('payment post method is accessed');
    
});


export default router;
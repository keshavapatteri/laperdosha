import express from 'express'
const router = express.Router()

router.get('/',async(req,res,next)=>{
    console.log('admin get method is accessed');
    
});

router.post('/',async(req,res,next)=>{
    console.log('admin post method is accessed');
    
});


export default router;
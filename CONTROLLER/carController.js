import { Car } from "../MODEL/carModel.js"
//carlist
export const getcarlist =async (req,res,next)=>{
    try {
        
        const carlist = await Car.find();
        
        res.json({success:true,message:"feetched car list",data:carlist});

    } catch (error) {
res.status(error.status||500).json({message:error.message||"Internal server error"})        
    }
}

//create or add new car.....
export const createCar =async (req,res,next)=>{
    try {
      const{title,model,Year,priceperday,capacity,fuel,transmission,milege,status,color,registrationnumber,location,insurancedetails }=req.body;
    
    
      if(!title||!model|| !Year|| !priceperday|| !capacity|| !fuel|| !transmission|| !milege|| !status || !color|| !registrationnumber|| !location|| !insurancedetails ){
        res.status(400).json({success:false,message:`all fields are required`})
      }    
       //for storing to DB-make a instance

       const newCar = new Car({title,model,Year,priceperday,capacity,fuel,transmission,milege,status,color,registrationnumber,location,insurancedetails})
       await newCar.save() // saving to db

      res.json({success:true,message:"New car list Created successfully",data:newCar});

    } catch (error) {
res.status(error.status||500).json({message:error.message||"Internal server error"})        
    }
}

// update car
export const updateCar =async (req,res,next)=>{
    try {
      const{title,model,Year,priceperday,capacity,fuel,transmission,milege,status,color,registrationnumber,location,insurancedetails }=req.body
  
      const {id}=req.params;
      const updateCar =await Car.findByIdAndUpdate(id,{title,model,Year,priceperday,capacity,fuel,transmission,milege,status,color,registrationnumber,location,insurancedetails },{new:true})

      


      res.json({success:true,message:"New car list Updated successfully",data:updateCar});

    } catch (error) {
res.status(error.status||500).json({message:error.message||"Internal server error"})        
    }
}

//delete car

export const deleteCar =async (req,res,next)=>{
    try {
      const{model,Year,priceperday,capacity,fuel,transmission,milege,status,color,registrationnumber,location,insurancedetails }=req.body
  
      const {id}=req.params;
      const deleteCar =await Car.findByIdAndDelete(id,{model,Year,priceperday,capacity,fuel,transmission,milege,status,color,registrationnumber,location,insurancedetails },{new:true})

  


      res.json({success:true,message:"Car list Deleted successfully",data:deleteCar});

    } catch (error) {
res.status(error.status||500).json({message:error.message||"Internal server error"})        
    }
}
import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carwale.com%2Fimages%2F&psig=AOvVaw3SruUr_9o4o1VlpjbYolOo&ust=1723697519251000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCg_eTX84cDFQAAAAAdAAAAABAE"
    },
    brandname: String,
    // type:[string,"please enter a string"]
    model: String,
    Year: Number,
    priceperday: Number,
    capacity: Number,
    fuel: String,
    transmission: String,
    milege: Number,
    status: String,
    color: String,
    registrationnumber: String,
    location: String,
    insurancedetails:String



})

export const Car = mongoose.model('Car', carSchema)
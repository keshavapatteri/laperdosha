import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    pickuplocation:String,
    pickupdate:Number,
    pickuptime:Number,
    dropofflocation:String,
    dropoffdate:Number,
    dropofftime:Number,
    totalcost:String,
    paymentstatus:String,
    bookingstatus:String,
    

})

export const booking = mongoose.model('booking',bookingSchema)
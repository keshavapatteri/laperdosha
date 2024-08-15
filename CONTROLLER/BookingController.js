// import { booking } from "../MODEL/bookingModel";
import { booking } from "../MODEL/bookingModel.js";


//create a booking.....
export const createbooking = async (req, res, next) => {
    try {
        const { pickuplocation, pickupdate, pickuptime, dropofflocation, dropoffdate, dropofftime, totalcost, paymentstatus, bookingstatus } = req.body;


        if (!pickuplocation || !pickupdate || !pickuptime || !dropofflocation || !dropoffdate || !dropofftime || !totalcost || !paymentstatus || !bookingstatus) {
            res.status(400).json({ success: false, message: `all fields are required` })
        }
        //for storing to DB-make a instance

        const newBooking = new booking({ pickuplocation, pickupdate, pickuptime, dropofflocation, dropoffdate, dropofftime, totalcost, paymentstatus, bookingstatus })
        await newBooking.save() // saving to db

        res.json({ success: true, message: "New Booking Created successfully", data: newBooking });

    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" })
    }
}

//booking list
export const getbookinglist = async (req, res, next) => {
    try {

        const bookinglist = await booking.find();

        res.json({ success: true, message: "feetched car list", data: bookinglist });

    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" })
    }
}


// update booking
export const updateBooking = async (req, res, next) => {
    try {
        const { pickuplocation, pickupdate, pickuptime, dropofflocation, dropoffdate, dropofftime, totalcost, paymentstatus, bookingstatus } = req.body

        const { id } = req.params;
        const updateCar = await booking.findByIdAndUpdate(id, { pickuplocation, pickupdate, pickuptime, dropofflocation, dropoffdate, dropofftime, totalcost, paymentstatus, bookingstatus }, { new: true })




        res.json({ success: true, message: "New booking list Updated successfully", data: updateBooking });

    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" })
    }
}

//delete booking
export const deleteBooking = async (req, res, next) => {
    try {
        const { pickuplocation, pickupdate, pickuptime, dropofflocation, dropoffdate, dropofftime, totalcost, paymentstatus, bookingstatus } = req.body
        const { id } = req.params
        const deleteBooking = await booking.findByIdAndDelete(id, { pickuplocation, pickupdate, pickuptime, dropofflocation, dropoffdate, dropofftime, totalcost, paymentstatus, bookingstatus }, { new: true })

        res.json({ success: true, message: "Booking list Deleted successfully", data: deleteBooking });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "internal server error" })

    }
}
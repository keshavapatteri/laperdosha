import express from 'express'
import { createbooking, deleteBooking, getbookinglist, updateBooking } from '../../CONTROLLER/BookingController.js';
const router = express.Router()


//create
router.post ('/create',createbooking)
//get
router.get('/bookinglist',getbookinglist)
//update
router.put('/updatebooking/:id',updateBooking)
//delete
router.delete('/deletebooking/:id',deleteBooking)





export default router;
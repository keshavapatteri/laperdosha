import express from 'express'
import { createCar, deleteCar, getcarlist, updateCar } from '../../CONTROLLER/carController.js';
const router = express.Router()

router.get('/carlist',getcarlist);
router.post('/create',createCar);   //authADMIN
router.put('/update/:id',updateCar);
router.delete("/delete/:id",deleteCar);
export default router;
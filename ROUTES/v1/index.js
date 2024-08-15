import express from 'express'
import userRouter from './userRouter.js'
import carRouter from './carRouter.js'
import adminRouter from './adminRouter.js'
import paymentRouter from './paymentRouter.js'
import bookingRouter from './bookingRouter.js'
const v1Router = express.Router();

v1Router.use('/user',userRouter)
v1Router.use('/car',carRouter)
v1Router.use('/admin',adminRouter)
v1Router.use('/payment',paymentRouter)
v1Router.use('/booking',bookingRouter)

export default v1Router;
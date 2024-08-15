import express from 'express'
import { cheackUser, UserCreate, UserLogin, UserProfile } from '../../CONTROLLER/UserController.js';
import { authUser } from '../../MIDDLEWARE/authUser.js';

const router = express.Router()

router.post('/create',UserCreate);
router.post('/login',UserLogin);
//for seeing profile access
router.get('/profile/:id',authUser,UserProfile);
//cheack user for frontent protection
router.get('/cheack-user',authUser,cheackUser)

export default router;
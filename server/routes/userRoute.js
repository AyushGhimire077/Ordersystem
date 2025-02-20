import express from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();


userRouter.post('/login',loginUser);  
userRouter.post('/logout',logoutUser);  
userRouter.post('/register', registerUser);  

export default userRouter;

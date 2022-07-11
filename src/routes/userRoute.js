import express from 'express';
import { existUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post("/users", existUser);

export default userRoute;
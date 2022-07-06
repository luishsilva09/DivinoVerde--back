import express from "express";
import signupRoute from "./signupRoute.js";

import { signIn } from '../controllers/authController.';

const router = express.Router();


router.use(signupRoute);

router.post('/sign-in', signIn);


export default router;

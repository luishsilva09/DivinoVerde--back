import express from "express";
import { signup } from "../controllers/signupController.js";
import validSignup from "../midllewares/validSignup.js";

const signupRoute = express.Router();

signupRoute.post("/signup", validSignup, signup);

export default signupRoute;

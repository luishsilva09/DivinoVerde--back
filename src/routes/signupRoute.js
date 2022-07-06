import express from "express";
import { signup } from "../controllers/signupController.js";

const signupRoute = express.Router();

signupRoute.post("/signup", signup);

export default signupRoute;

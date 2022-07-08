import express from 'express';
import { signIn } from "../controllers/signInController.js";

const signInRoute = express.Router();

signInRoute.post("/sign-in", signIn);

export default signInRoute;
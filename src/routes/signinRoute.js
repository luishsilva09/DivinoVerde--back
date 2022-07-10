import express from 'express';
import { signIn, existUser } from "../controllers/signInController.js";

const signInRoute = express.Router();

signInRoute.post("/sign-in", signIn);
signInRoute.get("/sign-in", existUser);

export default signInRoute;
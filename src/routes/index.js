import express from "express";
import signupRoute from "./signupRoute.js";

import { signIn } from "../controllers/authController..js";
import productRoute from "./productRoute.js";

const router = express.Router();

router.use(signupRoute);
router.use(productRoute);
router.post("/sign-in", signIn);

export default router;

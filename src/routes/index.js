import express from "express";
import signupRoute from "./signupRoute.js";

import { signIn } from "../controllers/authController..js";
import productRoute from "./productRoute.js";
import cartRoute from "./cartRoute.js";

const router = express.Router();

router.use(signupRoute);
router.use(productRoute);
router.use(cartRoute);
router.post("/sign-in", signIn);

export default router;

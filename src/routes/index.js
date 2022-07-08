import express from "express";
import signInRoute from "./signinRoute.js";
import signupRoute from "./signupRoute.js";
import productRoute from "./productRoute.js";

const router = express.Router();

router.use(signInRoute);
router.use(signupRoute);
router.use(productRoute);

export default router;

import express from "express";
import signupRoute from "./signupRoute.js";

const router = express.Router();

router.use(signupRoute);

export default router;

import express from "express";
import signInRoute from "./signinRoute.js";
import signupRoute from "./signupRoute.js";
import listProductsRoute from "./listProductsRoute.js";
import productRoute from "./productRoute.js";
import categoryRoute from "./categoryFilterRouter.js";

const router = express.Router();

router.use(signInRoute);
router.use(signupRoute);
router.use(listProductsRoute);
router.use(productRoute);
router.use(categoryRoute);

export default router;

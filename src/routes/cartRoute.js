import express from "express";
import { AddCart, GetCart } from "../controllers/cartController.js";
import validUser from "../midllewares/validUser.js";

const cartRoute = express.Router();

cartRoute.post("/cart/:itemId", validUser, AddCart);
cartRoute.get("/cart", validUser, GetCart);
export default cartRoute;

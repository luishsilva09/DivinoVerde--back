import express from "express";
import { AddCart, GetCart } from "../controllers/cartController.js";

const cartRoute = express.Router();

cartRoute.post("/cart/:itemId", AddCart);
cartRoute.get("/cart/:userId", GetCart);
export default cartRoute;

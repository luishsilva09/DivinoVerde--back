import express from "express";
import { AddCart } from "../controllers/cartController.js";

const cartRoute = express.Router();

cartRoute.post("/cart/:itemId", AddCart);

export default cartRoute;

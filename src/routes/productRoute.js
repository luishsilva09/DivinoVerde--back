import express from "express";
import addProduct, { product } from "../controllers/productController.js";

const productRoute = express.Router();

productRoute.get("/product/:id", product);
productRoute.post("/product", addProduct);

export default productRoute;

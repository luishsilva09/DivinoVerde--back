import express from 'express';
import { listProducts } from '../controllers/listProductsController.js';

const listProductsRoute = express.Router();

listProductsRoute.get("/products", listProducts);

export default listProductsRoute;
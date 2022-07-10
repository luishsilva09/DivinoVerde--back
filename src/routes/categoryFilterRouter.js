import express from 'express';
import { categories } from '../controllers/categoriesController.js';

const categoryRoute = express.Router();

categoryRoute.get('/categories', categories);

export default categoryRoute;
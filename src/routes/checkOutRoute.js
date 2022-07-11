import express from "express";
import finish from "../controllers/CheckOutController.js";
import validUser from "../midllewares/validUser.js";

const checkOutRoute = express.Router();

checkOutRoute.post("/finish", validUser, finish);

export default checkOutRoute;

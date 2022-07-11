import express from "express";
import {
  AddCart,
  GetCart,
  DeleteItem,
  CartEdit,
} from "../controllers/cartController.js";
import validUser from "../midllewares/validUser.js";

const cartRoute = express.Router();

cartRoute.post("/cart/:itemId", validUser, AddCart);
cartRoute.get("/cart", validUser, GetCart);
cartRoute.delete("/deleteitem/:itemId", validUser, DeleteItem);
cartRoute.post("/cartedit", validUser, CartEdit);
export default cartRoute;

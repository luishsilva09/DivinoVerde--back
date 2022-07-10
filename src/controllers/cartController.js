import { ObjectId } from "mongodb";
import db from "../database/mongo.js";

export async function AddCart(req, res) {
  try {
    const itemId = req.params.itemId;
    const sessions = res.locals.sessions;

    const itemData = await db
      .collection("products")
      .findOne({ _id: new ObjectId(itemId) });
    await db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(sessions.userId) },
        { $push: { cart: { ...itemData } } }
      );
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function GetCart(req, res) {
  try {
    const session = res.locals.sessions;
    let total = 0;

    const userData = await db
      .collection("users")
      .findOne({ _id: new ObjectId(session.userId) });
    if (userData.cart) {
      userData.cart.map((e) => (total += e.price));
      const datauser = {
        userData: userData.cart,
        total,
      };
      res.send(datauser);
    } else {
      res.send("Nada no carrinho");
    }
  } catch {
    res.sendStatus(500);
  }
}

export async function DeleteItem(req, res) {
  try {
    const itemId = req.params.itemId;
    const session = res.locals.sessions;

    await db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(session.userId) },
        { $pull: { cart: { _id: new ObjectId(itemId) } } }
      );
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
}

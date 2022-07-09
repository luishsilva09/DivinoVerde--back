import { ObjectId } from "mongodb";
import db from "../database/mongo.js";

export async function AddCart(req, res) {
  try {
    const itemId = req.params.itemId;
    const session = req.locals.session;

    const itemData = await db
      .collection("products")
      .findOne({ _id: new ObjectId(itemId) });
    await db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(session.userId) },
        { $push: { cart: { ...itemData } } }
      );
  } catch {
    res.sendStatus(500);
  }
}

export async function GetCart(req, res) {
  try {
    const userId = req.params.userId;
    const session = req.locals.session;
    let total = 0;

    const userData = await db
      .collection("users")
      .findOne({ _id: new ObjectId(session.userId) });

    userData.cart.map((e) => (total += e.price));
    const datauser = {
      userData: userData.cart,
      total,
    };

    res.send(datauser);
  } catch {
    res.sendStatus(500);
  }
}

import { ObjectId } from "mongodb";
import db from "../database/mongo.js";

export async function AddCart(req, res) {
  try {
    const itemId = req.params.itemId;
    const sessions = res.locals.sessions;

    const exist = await db.collection("users").findOne({
      _id: new ObjectId(sessions.userId),
      cart: { $elemMatch: { _id: new ObjectId(itemId) } },
    });
    if (!exist) {
      const itemData = await db
        .collection("products")
        .findOne({ _id: new ObjectId(itemId) });
      await db
        .collection("users")
        .updateOne(
          { _id: new ObjectId(sessions.userId) },
          { $push: { cart: { ...itemData, amount: 1 } } }
        );
    }
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
    if (userData.cart && userData.cart !== null) {
      userData.cart.map((e) => (total += e.price * e.amount));
      const datauser = {
        userData: userData.cart,
        total,
      };
      res.send(datauser);
    } else {
      res.send("Nada no carrinho");
    }
  } catch (error) {
    console.log(userData.cart);
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

export async function CartEdit(req, res) {
  try {
    const sessions = res.locals.sessions;

    await db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(sessions.userId) },
        { $pull: { cart: { _id: new ObjectId(req.body.itemId) } } }
      );

    const itemData = await db
      .collection("products")
      .findOne({ _id: new ObjectId(req.body.itemId) });
    await db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(sessions.userId) },
        { $push: { cart: { ...itemData, amount: req.body.value } } }
      );

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

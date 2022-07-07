import { ObjectId } from "mongodb";
import db from "../database/mongo.js";

export async function AddCart(req, res) {
  const itemId = req.params.itemId;
  const { authorization } = req.headers;

  // const token = authorization?.replace("Bearer ", "");
  // const session = await db.collection("session").findOne({ token });
  // if (!token || !session) {
  //   return res.sendStatus(401);
  // }

  const itemData = await db
    .collection("products")
    .findOne({ _id: new ObjectId(itemId) });
  await db
    .collection("users")
    .updateOne(
      { _id: new ObjectId("62c742dbb77da7d13facefaf") },
      { $push: { cart: { ...itemData } } }
    );
  //testes
  const fim = await db
    .collection("users")
    .findOne({ _id: new ObjectId("62c742dbb77da7d13facefaf") });
  res.send(fim);
}

export async function GetCart(req, res) {
  const userId = req.params.userId;
  const { authorization } = req.headers;
  let total = 0;

  // const token = authorization?.replace("Bearer ", "");
  // const session = await db.collection("session").findOne({ token });
  // if (!token || !session) {
  //   return res.sendStatus(401);
  // }

  const userData = await db
    .collection("users")
    .findOne({ _id: new ObjectId("62c742dbb77da7d13facefaf") });

  userData.cart.map((e) => (total += e.price));
  const datauser = {
    userData: userData.cart,
    total,
  };

  res.send(datauser);
}

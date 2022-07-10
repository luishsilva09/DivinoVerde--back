import { ObjectId } from "mongodb";
import db from "../database/mongo.js";

export async function product(req, res) {
  const productId = req.params.id;
  try {
    const itemData = await db
      .collection("products")
      .findOne({ _id: new ObjectId(productId) });
    res.status(200).send(itemData);
  } catch {
    res.sendStatus(500);
  }
}
export default async function addProduct(req, res) {
  try {
    const productData = req.body;
    await db.collection("products").insertOne(req.body);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
}

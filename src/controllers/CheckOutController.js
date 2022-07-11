import db from "../database/mongo.js";
import { ObjectId } from "mongodb";

export default async function finish(req, res) {
  try {
    const order = req.body;
    const sessions = res.locals.sessions;

    await db.collection("orders").insertOne({
      userId: sessions.userId,
      items: { ...order },
    });

    await db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(sessions.userId) },
        { $set: { cart: {} } }
      );

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

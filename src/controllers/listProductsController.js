import db from "../database/mongo.js";

export async function listProducts () {
  try {
    const products = await db.collection("products").find().toArray();

    res.status(200).send(products);
  } catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}
import db from "../database/mongo";

export async function listProducts () {
  try {
    const prducts = await db.collection('products').find().toArray();

    res.send().status(200);
  } catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}
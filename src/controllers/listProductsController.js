import db from "../database/mongo.js";

export async function listProducts (req, res) {
  const category = req.query.category;
  let products = null;
  
  try {
    if (!category) {
      products = await db.collection("products").find().toArray();
    } else {
      products = await db.collection("products").find({ category: category }).toArray();
    }

    res.status(200).send(products);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

import db from "../database/mongo.js";

export async function categories (req, res) {
  const categories = [];
  
  try {
    const products = await db.collection('products').find().toArray();
    
    for (let i = 0; i < products.length; i++) {
      categories.push(products[i].category);
    }
    const listCategories = categories.filter((category, index) => categories.indexOf(category) === index);

    res.send(listCategories).status(200);
  } catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}
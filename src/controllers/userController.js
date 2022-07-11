import db from "../database/mongo.js";

export async function existUser (req, res) {
  const { email } = req.body;

  if (!email) {
    return res.sendStatus(400);
  }

  try {
    const userEmail = await db.collection("users").findOne({ email });
    if (userEmail) {
      res.sendStatus(409);
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
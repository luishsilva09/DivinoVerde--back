import db from "../database/mongo.js";
export default async function validUser(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");
  const session = await db.collection("session").findOne({ token });
  if (!token || !session) {
    return res.sendStatus(401);
  }

  res.locals.session = session;
  next();
}

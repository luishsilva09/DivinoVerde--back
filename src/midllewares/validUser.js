import db from "../database/mongo.js";
export default async function validUser(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");

  const sessions = await db.collection("sessions").findOne({ token: token });

  if (!token || !sessions) {
    return res.sendStatus(401);
  }

  res.locals.sessions = sessions;
  next();
}

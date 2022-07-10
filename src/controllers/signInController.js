import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import db from "../database/mongo.js";

export async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.status(401).send("Usuário ou senha não correspondem.");
    }

    if (bcrypt.compareSync(password, user.password)) {
      const { name } = user;
      const token = uuid();

      await db.collection("sessions").insertOne({ token, userId: user._id });
      res.send({ name, token }).status(200);
    } else {
      res.status(401).send("Usuário ou senha não correspondem.");
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function existUser(rew, res) {
  const { email } = req.body;

  try {
    const userEmail = await db.collection("users").findOne({ email });
    if (userEmail) {
      res.status(401).send("Este usuário já existe");
    }

    res.sendStatus(200);

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
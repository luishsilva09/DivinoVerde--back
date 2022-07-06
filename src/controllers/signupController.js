import bcrypt from "bcrypt";
import joi from "joi";
import db from "../database/mongo.js";
import { v4 as uuid } from "uuid";
import { ObjectId } from "mongodb";

export async function signup(req, res) {
  const userData = res.locals.body;
  try {
    delete userData.repeat_password;
    await db.collection("users").insertOne({
      ...userData,
      password: bcrypt.hashSync(userData.password, 10),
    });
    res.sendStatus(201);
  } catch {
    return res.sendStatus(500);
  }
}

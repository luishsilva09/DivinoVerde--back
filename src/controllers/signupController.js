import bcrypt from "bcrypt";
import joi from "joi";
import db from "../database/mongo.js";
import { v4 as uuid } from "uuid";
import { ObjectId } from "mongodb";

export async function signup(req, res) {
  const userData = req.body;
  console.log(userData);
  res.send(userData);
}

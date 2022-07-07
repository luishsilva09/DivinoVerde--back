import joi from "joi";
import db from "../database/mongo.js";

export default async function validSignup(req, res, next) {
  const signupSchema = joi.object({
    CPF: joi.number().required(),
    name: joi.string().trim().required(),
    email: joi.string().email().required(),
    phone: joi.number(),
    birthDate: joi.string().required(),
    password: joi.string().required(),
    repeat_password: joi.ref("password"),
    address: {
      zipCode: joi.number().required(),
      street: joi.string().trim().required(),
      number: joi.number().required(),
      district: joi.string().trim().required(),
      city: joi.string().trim().required(),
      state: joi.string().trim().required(),
    },
  });
  const { error } = signupSchema.validate(req.body);
  if (error) {
    console.log(error);
    return res.sendStatus(401);
  }
  const existUser = await db
    .collection("users")
    .findOne({ email: req.body.email });
  if (existUser) {
    return res.status(422).send("Email ja cadastrado");
  }
  res.locals.body = req.body;

  next();
}

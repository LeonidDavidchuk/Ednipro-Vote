import jwt from "jsonwebtoken";
import express from "express";
import { hashPassword } from "../helpers/hasher.js";
import { User } from "./user.js";

const app = new express();
app.use(express.json());

export const registrationModel = async (data, res) => {
  const { name, email, isAdmin } = data;
  try {
    const user = await User.create({
      name,
      email,
      isAdmin,
    });

    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    user.dataValues.token = token;

    res.status(201).json({ message: "Пользователь создан", user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Ошибка создания пользователя", error });
  }
};

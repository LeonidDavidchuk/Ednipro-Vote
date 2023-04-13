import jwt from "jsonwebtoken";
import express from "express";
import { User } from "./user.js";
import { sendEmail } from "../helpers/mailer.js";

const app = new express();
app.use(express.json());

export const registrationModel = async (data, res) => {
  const { name, email, isAdmin } = data;
  try {
    console.log(name.includes(" "));
    if (name.includes("  ")) {
      return res.status(400).json("Incorrect name");
    }

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

    await sendEmail(
      email,
      "ЄДніпро Голосування",
      `${name}, вас вітає платформа для голосування за учнівський - ЄДніпро! Ви успішно зареєструвалися на нашій платформі. Щоб проголосувати за дизайн учнівського, перейдіть на веб-сайт.`
    );

    res.status(201).json({ message: "Пользователь создан", user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Ошибка создания пользователя", error });
  }
};

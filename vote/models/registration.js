import jwt from "jsonwebtoken";
import express from "express";
import { hashPassword } from "../helpers/hasher.js";
import { User } from "./user.js";

const app = new express();
app.use(express.json());

export const registrationModel = async (data, res) => {
  const { name, secondName, surname, login, password, isAdmin } = data;
  try {
    const hashedPassword = hashPassword(password);

    const user = await User.create({
      name,
      secondName,
      surname,
      login,
      password: hashedPassword,
      isAdmin,
    });

    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    user.dataValues.token = token;

    res.status(201).json({ message: "User Created", user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error user created", error });
  }
};

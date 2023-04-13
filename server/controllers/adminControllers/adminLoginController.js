import { Router } from "express";
import dotenv from "dotenv";

dotenv.config();

export const adminLoginController = async (req, res) => {
  try {
    const { password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (process.env.ADMIN_PASSWORD === password) {
      res.status(200).json({ message: "Админ вошел успешно" });
    } else {
      res.status(401).json({ message: "Неверный пароль" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ошибка при входе админа", error });
  }
};

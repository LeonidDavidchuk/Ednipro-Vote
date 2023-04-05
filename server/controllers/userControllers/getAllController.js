import { User } from "../../models/user.js";

export const getAllController = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error getting users", error });
  }
};

import { Picture } from "../../models/picture.js";

export const getAllPictureController = async (req, res) => {
  try {
    const users = await Picture.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error getting pictures", error });
  }
};

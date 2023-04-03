import { User } from "../../models/user.js";

export const getUserController = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User with id this id not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving user", error });
  }
};

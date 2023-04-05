import { User } from "../../models/user.js";

export const changeController = async (req, res) => {
  const userId = req.user.id;
  const { login, password } = req.body;
  try {
    const response = User.update(req.body, { where: { id: req.user.id } });
    console.log(response);
    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updated user" });
  }
};

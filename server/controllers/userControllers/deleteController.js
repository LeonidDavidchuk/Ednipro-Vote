import { User } from "../../models/user.js";
import { Picture } from "../../models/picture.js";

export const deleteController = async (req, res) => {
  const id = req.user.id;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const votedPicture = user.votedPicture;
    await user.destroy();
    if (votedPicture) {
      await Picture.decrement("count_vote", { where: { id: votedPicture } });
    }
    return res.status(200).json({ message: "User delete successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting user" });
  }
};

import { User } from "../models/user.js";

export const isAdminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user.isAdmin) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  } catch (error) {
    console.error("Failed to check user's isAdmin status: ", error);
    return res
      .status(500)
      .json({ message: "Failed to check user's isAdmin status" });
  }
};

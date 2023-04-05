import { Picture } from "../../models/picture.js";
import { User } from "../../models/user.js";

export const deletePictureController = async (req, res) => {
  try {
    const pictureId = req.params.id;
    const picture = await Picture.findOne({ where: { id: pictureId } });
    if (!picture) {
      return res.status(404).send({ message: "Picture not found" });
    }

    await User.sequelize.query(
      `UPDATE Users SET votedPicture = NULL WHERE votedPicture = ${pictureId}`
    );

    await picture.destroy();
    return res.status(200).send({ message: "Picture deleted successful" });
  } catch (error) {
    console.error("Failed to delete picture:", error);
    res.status(500).send({ message: "Failed to delete picture" });
  }
};

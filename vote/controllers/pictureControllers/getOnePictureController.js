import { Picture } from "../../models/picture.js";

export const getOnePictureController = async (req, res) => {
  const pictureId = req.params.id;
  try {
    const picture = await Picture.findByPk(pictureId);
    if (picture) {
      res.status(200).json(picture);
    } else {
      res.status(404).json({ message: "Picture with id this id not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving picture", error });
  }
};

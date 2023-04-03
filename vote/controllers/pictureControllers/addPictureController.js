import { Picture } from "../../models/picture.js";

export const addPictureController = async (req, res) => {
  const { name, url } = req.body;

  try {
    const picture = await Picture.create({
      name: name,
      url: req.body.url,
      votes: 0,
    });

    return res.status(201).json({
      success: true,
      message: "Picture added successfully",
      date: picture,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error add picture",
    });
  }
};

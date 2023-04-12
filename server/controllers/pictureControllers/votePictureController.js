import { Picture } from "../../models/picture.js";
import { User } from "../../models/user.js";

export const votePictureController = async (req, res) => {
  const pictureId = req.body.id;
  const userId = req.user.id;

  try {
    const picture = await Picture.findOne({ where: { id: pictureId } });
    if (!picture) {
      return res.status(404).json({ message: "Картинка не найдена" });
    }

    const user = await User.findOne({ where: { id: userId } });
    
    const index = user.votedPicture;


    if (user.votedPicture === picture.id) {
      return res.status(400).json({
        message: "Вы можете проголосовать за картинку только один раз",
      });
    }

    if (user.votedPicture && user.votedPicture !== picture.id) {
      const previousPicture = await Picture.findOne({
        where: { id: user.votedPicture },
      });

      await previousPicture.decrement("count_vote");
    }

    const voteResponse = await Picture.update(
      { count_vote: picture.count_vote + 1 },
      { where: { id: picture.id } }
    );
    console.log(voteResponse);

    await User.update({ votedPicture: pictureId }, { where: { id: userId } });

    return res.status(200).json({picture : picture, previousPicture: index});
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ошибка при голосовании за картинку" });
  }
};

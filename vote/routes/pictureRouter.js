import Router from "express";
import { isAdminMiddleware } from "../middleware/isAdminMiddleware.js";
import { authenticateToken } from "../middleware/authenticateToken.js";
import { addPictureController } from "../controllers/pictureControllers/addPictureController.js";
import { deletePictureController } from "../controllers/pictureControllers/deletePictureController.js";
import { votePictureController } from "../controllers/pictureControllers/votePictureController.js";
import { getAllPictureController } from "../controllers/pictureControllers/getAllPictureController.js";
import { getOnePictureController } from "../controllers/pictureControllers/getOnePictureController.js";

export const pictureRouter = new Router();

pictureRouter.post("/add_picture", authenticateToken, addPictureController);
pictureRouter.get(
  "/getAll_picture",
  authenticateToken,
  isAdminMiddleware,
  getAllPictureController
);
pictureRouter.get(
  "/getOne_picture/:id",
  authenticateToken,
  isAdminMiddleware,
  getOnePictureController
);
pictureRouter.get(
  "/delete_picture/:id",
  authenticateToken,
  isAdminMiddleware,
  deletePictureController
);
pictureRouter.post("/vote", authenticateToken, votePictureController);

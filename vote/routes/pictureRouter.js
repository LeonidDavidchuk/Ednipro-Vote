import Router from "express";
import { addPictureController } from "../controllers/pictureControllers/addPictureController.js";
import { deletePictureController } from "../controllers/pictureControllers/deletePictureController.js";
import { authenticateToken } from "../middleware/authenticateToken.js";
import { votePictureController } from "../controllers/pictureControllers/votePictureController.js";
import { getAllPictureController } from "../controllers/pictureControllers/getAllPictureController.js";
import { getOnePictureController } from "../controllers/pictureControllers/getOnePictureController.js";
import { isAdminMiddleware } from "../middleware/isAdminMiddleware.js";

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

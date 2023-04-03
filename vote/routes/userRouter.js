import Router from "express";
import { isAdminMiddleware } from "../middleware/isAdminMiddleware.js";
import { authenticateToken } from "../middleware/authenticateToken.js";
import { getAllController } from "../controllers/userControllers/getAllController.js";
import { getUserController } from "../controllers/userControllers/getUserController.js";
import { registrationController } from "../controllers/userControllers/registrationController.js";
import { loginContoller } from "../controllers/userControllers/loginContoller.js";
import { logintokenContoller } from "../controllers/userControllers/logintokenController.js";
import { deleteController } from "../controllers/userControllers/deleteController.js";
import { changeController } from "../controllers/userControllers/changeController.js";

const app = new Router();

app.post("/register", registrationController);
app.get("/authMe", authenticateToken, logintokenContoller);
app.get("/authPass", loginContoller);
app.get("/getAll", authenticateToken, isAdminMiddleware, getAllController);
app.get(
  "/getUser/:id",
  authenticateToken,
  isAdminMiddleware,
  getUserController
);
app.get("/delete", authenticateToken, deleteController);
app.put("/change", authenticateToken, changeController);

export default app;

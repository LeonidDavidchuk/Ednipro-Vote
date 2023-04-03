import express from "express";
import { logintokenContoller } from "../controllers/userControllers/logintokenController.js";
import { authenticateToken } from "../middleware/authenticateToken.js";

const router = express.Router();

router.route("/").get(authenticateToken, logintokenContoller);

export default router;

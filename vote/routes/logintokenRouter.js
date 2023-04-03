import { logintokenContoller } from "../controllers/logintokenController.js";
import { authenticateToken } from "../middleware/authenticateToken.js";
import express from "express";

const router = express.Router();

router.route("/").get(authenticateToken, logintokenContoller);

export default router;

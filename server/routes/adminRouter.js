import Router from "express";
import { adminLoginController } from "../controllers/adminControllers/adminLoginController.js";

export const adminRouter = new Router();

adminRouter.post("/login", adminLoginController);

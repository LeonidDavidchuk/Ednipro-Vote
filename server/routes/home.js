import express from "express";
import userRouter from "../routes/userRouter.js";
import { pictureRouter } from "./pictureRouter.js";
import { adminRouter } from "./adminRouter.js";

const app = new express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/picture", pictureRouter);
app.use("/admin", adminRouter);

export default app;

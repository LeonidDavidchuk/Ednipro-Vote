// import {authDB} from "../models/user.js";
import express from "express";
import userRouter from "../routes/userRouter.js";
import { pictureRouter } from "./pictureRouter.js";

const app = new express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/picture", pictureRouter);

export default app;

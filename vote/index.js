import express from "express";
import { authDB } from "./database/dbconnection.js";
import router from "./routes/home.js";

const app = express();

authDB();

app.get("/api", (req, res) => {
  res.send("Hello");
  console.log("Hello");
});

app.use("/api", router);

app.listen(3000, () => console.log("app started"));

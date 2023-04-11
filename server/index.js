import express from "express";
import router from "./routes/home.js";
import { authDB } from "./database/dbconnection.js";
import cors from "cors";

const app = express();

authDB();
app.use(cors());

app.get("/api", (req, res) => {
  res.send("Hello");
  console.log("Hello");
});

app.use("/api", router);

app.listen(3000, () => console.log("app started"));

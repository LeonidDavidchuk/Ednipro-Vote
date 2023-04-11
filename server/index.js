import express from "express";
import router from "./routes/home.js";
import { authDB } from "./database/dbconnection.js";
import cors from "cors";
import path from "path";

const app = express();

authDB();
app.use(cors());

app.use("/api/uploads", express.static(path.join(path.resolve(), "uploads")));

app.get("/api", (req, res) => {
  res.send("Hello");
  console.log("Hello");
});

app.use("/api", router);

app.listen(3000, () => console.log("app started"));

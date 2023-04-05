import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize("votedb", "root", "root", {
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  port: process.env.PORT,
});

export const authDB = () =>
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection Successfully");
    })
    .catch((err) => {
      console.log("Connection Error", err);
    });

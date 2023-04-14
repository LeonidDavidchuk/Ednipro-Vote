import { sequelize } from "../database/dbconnection.js";
import { DataTypes } from "sequelize";

export const Picture = sequelize.define("Picture", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  school: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  count_vote: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

Picture.sync()
  .then(() => {
    console.log("Table picture created successfully");
  })
  .catch((err) => {
    console.error("Error creating picture table: ", err);
  });

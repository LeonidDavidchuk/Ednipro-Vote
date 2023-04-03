import { DataTypes } from "sequelize";
import { sequelize } from "../database/dbconnection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secondName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  votedPicture: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

User.sync()
  .then(() => {
    console.log("Table user created successfully");
  })
  .catch((err) => {
    console.error("Error creating user table: ", err);
  });

export const userModel = async (data, res) => {
  const { login, password } = data;

  try {
    const user = await User.findOne({
      where: {
        login,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    user.dataValues.token = token;

    res.status(200).json({ message: "Logged", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Login", error });
  }
};

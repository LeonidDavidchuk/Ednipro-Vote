import { userModel } from "../../models/user.js";

export const loginContoller = (req, res) => {
  try {
    const data = req.body;

    userModel(data, res, (err, result) => {
      if (err) {
        console.log("ERR:", err);
      } else {
        result.json();
      }
    });
  } catch (error) {}
};

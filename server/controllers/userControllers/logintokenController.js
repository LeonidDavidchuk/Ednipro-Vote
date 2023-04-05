import { loginModel } from "../../models/logintoken.js";

export const logintokenContoller = (req, res) => {
  try {
    const data = req.user;

    loginModel(data, res, (err, result) => {
      if (err) {
        console.log("ERR:", err);
      } else {
        result.json();
      }
    });
  } catch (error) {}
};

import { registrationModel } from "../../models/registration.js";

export const registrationController = (req, res) => {
  try {
    const data = req.body;

    registrationModel(data, res, (err, result) => {
      if (err) {
        console.log("ERR:", err);
      } else {
        result.json();
      }
    });
  } catch (error) {}
};

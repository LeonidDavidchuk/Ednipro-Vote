import { User } from "./user.js";

export const loginModel = async (data, res) => {
  const responnse = await User.findOne({
    where: {
      id: data.id,
    },
  });
  res.status(200).json({ message: "Authenticated", user: responnse });
};

export function authenticatetoken(req, res, next) {
  const authheader = req.headers["authorization"];

  const token = authheader && authheader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "access token required" });
  }

  const user = jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err, user) => {
      if (err) {
        return res.status(403).json({ message: "invalid access token" });
      }
      req.user = user;
      console.log(user);
      next();
    }
  );
}

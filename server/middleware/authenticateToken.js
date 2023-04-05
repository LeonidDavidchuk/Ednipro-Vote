import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader == null) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  console.log(token);

  console.log(req.body);

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "7d" },
    (err, user) => {
      if (err) {
        return res.sendStatus(403).json({ message: "Invalid token" });
      }
      req.user = user;
      next();
    }
  );
};

import jwt from "jsonwebtoken";

export const isAdmin = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    if (decoded.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Forbidden: You are not an admin." });
    }
  } catch (err) {
    res.status(401).json({ message: "Unauthorized: Invalid token." });
  }
};

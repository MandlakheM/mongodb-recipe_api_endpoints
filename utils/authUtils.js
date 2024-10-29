import jwt from "jsonwebtoken";
import secreteKey from "../config/jwtConfig.js";

const generateToken = (id) => {
  return jwt.sign({ id: id }, secreteKey, { expiresIn: "1h" });
};

export default generateToken;

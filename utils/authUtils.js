import jwt from "jsonwebtoken";
import secreteKey from "../config/jwtConfig.js";
import Users from "../models/users.js";

const generateToken = (id) => {
  return jwt.sign({ id: id }, secreteKey, { expiresIn: "1h" });
};

export const verifyToken = async (req, res, next) => {
    let token
 if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try {
        token = req.headers.authorization.split(" ")[1]
        const decode = jwt.verify(token, secreteKey)

        req.user = await Users.findById(decode.id).select("-password")
        next()
    } catch (error) {
        res.status(401).json({ error: "Token is not valid" });
    }
 }
};


export default generateToken;

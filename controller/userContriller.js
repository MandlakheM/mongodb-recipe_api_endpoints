import bcrypt from "bcrypt";
import generateToken from "../utils/authUtils.js";
import Users from "../models/users.js";

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
      fullName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      _id: user._id,
      email: user.email,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const currentUser = await Users.findOne({ email });
  
      if (!currentUser || !(await currentUser.matchPasswords(password))) {
        return res.status(401).json({ error: "Invalid login credentials" });
      }
  
      const token = generateToken(currentUser._id);
      res.status(200).json({ _id: currentUser._id, email: currentUser.email, token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

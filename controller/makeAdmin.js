import bcrypt from "bcrypt";
import Users from "../models/users.js";

export const makeAdmin = async () => {
  try {
    const existingAdmin = await Users.findOne({ email: "admin@test.com" });
    if (existingAdmin) {
      console.log("admin account already exists");
    } else {
      const newAdmin = new Users({
        fullName: "admin",
        email: "admin@test.com",
        password: await bcrypt.hash("Admin#1", 10),
        role: "admin",
      });
      await newAdmin.save();
    }
  } catch (error) {
    console.log(error.message);
  }
};

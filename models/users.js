import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "wrong email format"],
  },

  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
          value
        );
      },
      message:
        "Password must include at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and must be between 6 and 16 characters in length.",
    },
  },
});

userSchema.methods.matchPasswords = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

export default mongoose.model("User", userSchema);

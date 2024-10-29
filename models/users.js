import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({
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
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
          value
        );
      },
      message:
        "Password must include, at least one lowercase alphabet, at least one uppercase alphabet, at least one numeric digit, at least one special character, and also, the total length must be in the range.",
    },
  },
});

userSchema.methods.matchPasswords= async function (userPassword) {
    return await bcrypt.compare(userPassword, this.password)
}

export default mongoose.model("User", userSchema)
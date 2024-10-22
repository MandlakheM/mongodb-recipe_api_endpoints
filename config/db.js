import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("connection established: ", connection.connection.host);
  } catch (error) {
    console.log("connection to the database failed: ", error);
  }
};

export default connectDB;

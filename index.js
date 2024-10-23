import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";

import recipeRoutes from "./routes/recipeRoutes.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/", recipeRoutes);
app.all("*", (req, res) => res.send("error 404 page not found"));

app.listen(PORT, () =>
  console.log(
    `server connected and running on ${PORT}, http://localhost:${PORT}`
  )
);

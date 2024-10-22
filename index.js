import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.listen(PORT, () =>
  console.log(
    `server connected and running on ${PORT}, http://localhost:${PORT}`
  )
);

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MandlakheM/mongodb-recipe_api_endpoints.git
git push -u origin main
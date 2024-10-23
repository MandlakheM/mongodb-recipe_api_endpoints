import express from "express";
import {
  getRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
} from "../controller/recipeController.js";

const route = express.Router();

route.get("/", getRecipe);
route.post("/", createRecipe);
route.delete("/:id", deleteRecipe);
route.put("/:id", updateRecipe);

export default route;

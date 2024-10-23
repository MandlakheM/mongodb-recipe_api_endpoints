import express from "express";
import {
  getRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
  getRecipeById,
} from "../controller/recipeController.js";

const route = express.Router();

route.get("/", getRecipe);
route.post("/", createRecipe);
route.delete("/:id", deleteRecipe);
route.put("/:id", updateRecipe);
route.get("/:id", getRecipeById);

export default route;

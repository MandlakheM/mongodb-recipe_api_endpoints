import express from "express";
import { getRecipe, createRecipe } from "../controller/recipeController.js";

const route = express.Router();

route.get("/", getRecipe);
route.post("/add-recipe", createRecipe);

export default route;

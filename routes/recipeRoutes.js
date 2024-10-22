import express from "express";
import { getRecipe } from "../controller/recipeController.js";

const route = express.Router()

route.get('/', getRecipe)

export default route
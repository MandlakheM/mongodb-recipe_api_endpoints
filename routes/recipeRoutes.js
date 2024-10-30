import express from "express";
import {
  getRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
  getRecipeById,
} from "../controller/recipeController.js";
import { authorizeRole } from "../middleware/authMiddleware.js";
import { verifyToken } from "../utils/authUtils.js";

const route = express.Router();

route.get("/", getRecipe);
route.get("/:id", getRecipeById);
route.post("/", verifyToken, authorizeRole("admin"), createRecipe);
route.delete("/:id", verifyToken, authorizeRole("admin"), deleteRecipe);
route.put("/:id", verifyToken, authorizeRole("admin"), updateRecipe);

export default route;

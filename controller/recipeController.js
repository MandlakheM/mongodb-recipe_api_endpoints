import Recipe from "../models/recipes.js";
import mongoose from "mongoose";

export const getRecipe = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const skip = (page - 1) * limit;
    const recipes = await Recipe.find().skip(skip).limit(limit);

    const totalRecipe = await Recipe.countDocuments();

    res.status(200).json({ recipes, totalRecipe, page, limit });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to fetch recipes" });
  }
};

export const createRecipe = async (req, res) => {
  try {
    const {
      name,
      ingredients,
      instructions,
      category,
      prepTime,
      cookTime,
      servings,
    } = req.body;

    if (
      !name ||
      !ingredients ||
      !instructions ||
      !category ||
      !prepTime ||
      !cookTime ||
      !servings
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const recipe = new Recipe({
      name,
      ingredients,
      instructions,
      category,
      prepTime,
      cookTime,
      servings,
    });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    console.error(`Error occurred while creating recipe: ${err}`);
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json(updatedRecipe);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid recipe ID format" });
    }
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe successfully deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid recipe ID format" });
    }
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

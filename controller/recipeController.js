import Recipe from "../models/recipes.js";

export const getRecipe = (req, res) => {
  res.send("hello");
};

export const createRecipe = async (req, res, next) => {
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
    next(err);
  }
};

export const updateRecipe = async (req, res, next) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json(updatedRecipe);
  } catch (err) {
    next(err);
  }
};

export const deleteRecipe = async (req, res, next) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

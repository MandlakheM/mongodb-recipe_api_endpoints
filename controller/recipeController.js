import Recipe  from'../models/recipes.js';

export const getRecipe = (req, res) => {
    res.send("hello")
};

export const createRecipe = async (req, res, next) => {
    try {
      const { name, ingredients, instructions, category, prepTime, cookTime, servings } = req.body;
      const recipe = new Recipe({ name, ingredients, instructions, category, prepTime, cookTime, servings });
      await recipe.save();
      res.status(201).json(recipe);
    } catch (err) {
      next(err);
    }
  };

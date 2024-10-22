import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: { type: String, required: true },
    category: {
      type: String,
      enum: ["Dessert", "Main Course", "Appetizer"],
      required: true,
    },
    prepTime: { type: String, required: true },
    cookTime: { type: String, required: true },
    servings: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);

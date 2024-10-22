import mongoose from ('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  category: { type: String, enum: ['Dessert', 'Main Course', 'Appetizer'], required: true },
  prepTime: { type: Number, required: true },
  cookTime: { type: Number, required: true }, 
  servings: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
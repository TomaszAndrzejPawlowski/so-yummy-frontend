export const selectCategories = (state) => state.recipes.categories;
export const selectRecipesForMainPage = (state) =>
  state.recipes.mainPageRecipes;
export const selectRecipesByCategory = (state) =>
  state.recipes.recipesByCategory;
export const selectIngredients = (state) => state.recipes.ingredients;
export const selectPopularRecipes = (state) => state.recipes.popularRecipes;
export const selectIsLoading = (state) => state.recipes.isLoading;
export const selectRecipeById = (state) => state.recipes.recipeById;
export const selectSearchedRecipesByTitle = (state) =>
  state.recipes.recipesSearchedByTitle;
export const selectSearchedRecipesByIngredients = (state) =>
  state.recipes.recipesSearchedByIngredient;

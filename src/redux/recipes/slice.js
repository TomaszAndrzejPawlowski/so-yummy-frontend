import { createSlice } from "@reduxjs/toolkit";
import {
  fetchIngredientsList,
  fetchPopularRecipes,
  fetchRecipeById,
  fetchRecipesForCategory,
  searchByIngredient,
  searchByTitle,
} from "./operations";
import { fetchCategories } from "./operations";
import { fetchRecipesForMainPage } from "./operations";

const initialState = {
  categories: null,
  mainPageRecipes: null,
  recipesByCategory: null,
  recipeById: null,
  ingredients: null,
  popularRecipes: null,
  recipesSearchedByTitle: null,
  recipesSearchedByIngredient: null,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload.result;
        state.isLoading = false;
      })
      .addCase(fetchRecipesForMainPage.fulfilled, (state, action) => {
        state.mainPageRecipes = action.payload.result;
        state.isLoading = false;
      })
      .addCase(fetchRecipesForCategory.fulfilled, (state, action) => {
        state.recipesByCategory = action.payload.result;
        state.isLoading = false;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.recipeById = action.payload.result;
        state.isLoading = false;
      })
      .addCase(fetchIngredientsList.fulfilled, (state, action) => {
        state.ingredients = action.payload.result;
        state.isLoading = false;
      })
      .addCase(fetchPopularRecipes.fulfilled, (state, action) => {
        state.popularRecipes = action.payload.result;
        state.isLoading = false;
      })
      .addCase(searchByTitle.fulfilled, (state, action) => {
        state.recipesSearchedByTitle = action.payload.result;
        state.isLoading = false;
      })
      .addCase(searchByIngredient.fulfilled, (state, action) => {
        state.recipesSearchedByIngredient = action.payload.result;
        state.isLoading = false;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const recipesReducer = recipesSlice.reducer;

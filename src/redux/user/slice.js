import { createSlice } from "@reduxjs/toolkit";
import {
  addIngredientToShoppingList,
  addOwnRecipe,
  addRecipeToFav,
  editUser,
  fetchFavoriteRecipes,
  fetchOwnedRecipes,
  fetchShoppingList,
  fetchUser,
  removeIngredientFromShoppingList,
  removeOwnRecipe,
  removeRecipeFromFav,
  subscribeToNews,
} from "./operations";

const initialState = {
  userInfo: {
    name: null,
    email: null,
    avatar: null,
    subscription: false,
    addedRecipes: [],
    favRecipes: [],
    shoppingList: [],
  },
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

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userInfo.email = action.payload.result.email;
        state.userInfo.name = action.payload.result.name;
        state.userInfo.avatar = action.payload.result.avatar;
        state.userInfo.subscription = action.payload.result.subscription;
        state.userInfo.addedRecipes = action.payload.result.addedRecipes;
        // state.userInfo.favRecipes = action.payload.result.favRecipes;
        state.userInfo.shoppingList = action.payload.result.shoppingList;
        state.isLoading = false;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.userInfo.email = action.payload.result.email;
        state.userInfo.name = action.payload.result.name;
        state.userInfo.avatar = action.payload.result.avatar;
        state.isLoading = false;
      })
      .addCase(subscribeToNews.fulfilled, (state, action) => {
        state.userInfo.subscription = action.payload.result.subscription;
        state.isLoading = false;
      })
      .addCase(addRecipeToFav.fulfilled, (state, action) => {
        // state.userInfo.favRecipes.push(action.payload.result.id);
        state.isLoading = false;
      })
      .addCase(removeRecipeFromFav.fulfilled, (state, action) => {
        const indexToDelete = state.userInfo.favRecipes.indexOf(
          action.payload.result.id
        );
        state.userInfo.favRecipes.splice(indexToDelete, 1);
        state.isLoading = false;
      })
      .addCase(addIngredientToShoppingList.fulfilled, (state, action) => {
        state.userInfo.shoppingList.push(action.payload.result.ingredient);
        state.isLoading = false;
      })
      .addCase(removeIngredientFromShoppingList.fulfilled, (state, action) => {
        const indexToDelete = state.userInfo.shoppingList.findIndex(
          (ingredient) =>
            ingredient._id === action.payload.result.ingredient._id
        );
        state.userInfo.shoppingList.splice(indexToDelete, 1);
        state.isLoading = false;
      })
      .addCase(addOwnRecipe.fulfilled, (state, action) => {
        state.userInfo.addedRecipes.push(action.payload.result._id);
        state.isLoading = false;
      })
      .addCase(removeOwnRecipe.fulfilled, (state, action) => {
        const indexToDelete = state.userInfo.favRecipes.indexOf(
          action.payload.result.id
        );
        state.userInfo.addedRecipes.splice(indexToDelete, 1);
        state.isLoading = false;
      })
      .addCase(fetchOwnedRecipes.fulfilled, (state, action) => {
        state.userInfo.addedRecipes = action.payload.result;
        state.isLoading = false;
      })
      .addCase(fetchFavoriteRecipes.fulfilled, (state, action) => {
        state.userInfo.favRecipes = action.payload.result;
        state.isLoading = false;
      })
      .addCase(fetchShoppingList.fulfilled, (state, action) => {
        state.userInfo.shoppingList = action.payload.result;
        state.isLoading = false;
      })

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const userReducer = userSlice.reducer;

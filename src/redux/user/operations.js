import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3030/api/";

// function setAuthToken(token) {
//   axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
// }

export const fetchUser = createAsyncThunk("/auth/info", async (_, thunkAPI) => {
  // const store = thunkAPI.getState();
  // const token = store.auth.token;
  // if (token) {
  //   setAuthToken(token);
  try {
    const response = await axios.get("/auth/info");
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
  // }
  // return thunkAPI.rejectWithValue("No token");
});

export const editUser = createAsyncThunk(
  "/auth/edit",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.patch("/auth/edit", userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const subscribeToNews = createAsyncThunk(
  "api/subscribe",
  async (userEmail, thunkAPI) => {
    try {
      const response = await axios.post("/subscribe", userEmail);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addRecipeToFav = createAsyncThunk(
  "/favorite",
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch("/favorite", id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const removeRecipeFromFav = createAsyncThunk(
  "/favorite/remove",
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch("/favorite/remove", id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addIngredientToShoppingList = createAsyncThunk(
  "/shopping-list",
  async (ingredient, thunkAPI) => {
    try {
      const response = await axios.patch("/shopping-list", ingredient);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const removeIngredientFromShoppingList = createAsyncThunk(
  "/shopping-list/remove",
  async (ingredient, thunkAPI) => {
    try {
      const response = await axios.patch("/shopping-list/remove", ingredient);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addOwnRecipe = createAsyncThunk(
  "add/ownRecipes",
  async (recipe, thunkAPI) => {
    try {
      const response = await axios.post("/ownRecipes", recipe);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const removeOwnRecipe = createAsyncThunk(
  "delete/ownRecipes",
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.delete("/ownRecipes", recipeId);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchOwnedRecipes = createAsyncThunk(
  "/ownRecipes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/ownRecipes");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchFavoriteRecipes = createAsyncThunk(
  "user/favorite",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/favorite");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchShoppingList = createAsyncThunk(
  "user/shopping-list",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/shopping-list");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3030/api/";

export const fetchCategories = createAsyncThunk(
  "/recipes/category-list",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes/category-list");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchRecipesForMainPage = createAsyncThunk(
  "/recipes/main-page",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes/main-page");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchRecipesForCategory = createAsyncThunk(
  "/recipes/:category",
  async (param, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${param}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  "/recipes/id/:id",
  async (param, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/id/${param}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchIngredientsList = createAsyncThunk(
  "/ingredients/list",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/ingredients/list");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchPopularRecipes = createAsyncThunk(
  "/popular-recipe",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/popular-recipe");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const searchByTitle = createAsyncThunk(
  "/search",
  async (input, thunkAPI) => {
    try {
      const response = await axios.get("/search", input);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const searchByIngredient = createAsyncThunk(
  "/ingredients",
  async (input, thunkAPI) => {
    try {
      const response = await axios.get("/ingredients", input);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

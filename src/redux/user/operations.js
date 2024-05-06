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
      const response = await axios.patch("/auth/edit", userData);
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

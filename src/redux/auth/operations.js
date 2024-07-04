import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://soyummybackend-46te.onrender.com/api/";
// "http://localhost:3030/api/";

function setAuthToken(token) {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
}

export const register = createAsyncThunk(
  "/auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", credentials);
      setAuthToken(response.data.result.token);
      return response.data.result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", credentials);
      setAuthToken(response.data.result.token);
      return response.data.result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.get("auth/logout");
    setAuthToken();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const verifyUser = createAsyncThunk("auth/info", async (_, thunkAPI) => {
  const store = thunkAPI.getState();
  const token = store.auth.token;
  if (token) {
    try {
      setAuthToken(token);
      const response = await axios.get("auth/info");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
  return thunkAPI.rejectWithValue("No token");
});

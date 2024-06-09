import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, verifyUser } from "./operations";

const initialState = {
  isLoggedIn: false,
  user: { name: null, email: null, avatarUrl: null },
  token: null,
  isRefreshing: false,
};

const setLoggedInState = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.user.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, setLoggedInState)
      .addCase(login.fulfilled, setLoggedInState)
      .addCase(logout.fulfilled, (state) => initialState)
      .addCase(verifyUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.result.name;
        state.user.email = action.payload.result.email;
        state.user.avatarUrl = action.payload.result.avatar;
        state.token = action.payload.result.token;
        state.isRefreshing = false;
      })
      .addCase(verifyUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

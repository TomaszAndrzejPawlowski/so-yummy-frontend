import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, verifyUser } from "./operations";

const initialState = {
  isLoggedIn: false,
  user: { name: null, email: null, avatarUrl: null },
  token: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null, avatarUrl: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(verifyUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.user.name = action.payload.result.name;
        state.user.email = action.payload.result.email;
        state.user.avatarUrl = action.payload.result.avatar;
        state.token = action.payload.result.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(verifyUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

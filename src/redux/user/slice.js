import { createSlice } from "@reduxjs/toolkit";
import { editUser, fetchUser, subscribeToNews } from "./operations";

const initialState = {
  userInfo: {
    name: null,
    email: null,
    avatar: null,
    subscription: false,
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userInfo.email = action.payload.email;
        state.userInfo.name = action.payload.name;
        state.userInfo.avatar = action.payload.avatar;
        state.userInfo.subscription = action.payload.subscription;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.userInfo.email = action.payload.email;
        state.userInfo.name = action.payload.name;
        state.userInfo.avatar = action.payload.avatar;
      })
      .addCase(
        subscribeToNews.fulfilled,
        (state, action) =>
          (state.userInfo.subscription = action.payload.subscription)
      );
  },
});

export const userReducer = userSlice.reducer;

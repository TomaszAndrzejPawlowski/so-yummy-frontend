export const selectUserInfo = (state) => state.user.userInfo;
export const selectUserName = (state) => state.user.userInfo.name;
export const selectUserEmail = (state) => state.user.userInfo.email;
export const selectUserAvatar = (state) => state.user.userInfo.avatar;
export const selectIsLoading = (state) => state.user.isLoading;

export const selectUserInfo = (state) => state.user.userInfo;
export const selectUserName = (state) => state.user.userInfo.name;
export const selectUserEmail = (state) => state.user.userInfo.email;
export const selectUserAvatar = (state) => state.user.userInfo.avatar;
export const selectUserAddedRecipes = (state) =>
  state.user.userInfo.addedRecipes;
export const selectUserFavRecipes = (state) => state.user.userInfo.favRecipes;
export const selectUserShoppingList = (state) =>
  state.user.userInfo.shoppingList;
export const selectIsLoading = (state) => state.user.isLoading;

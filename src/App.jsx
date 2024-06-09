import "./App.css";
import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing, selectToken } from "./redux/auth/selectors";
import { verifyUser } from "./redux/auth/operations";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

const MainPage = lazy(() => import("./pages/Home/MainPage"));
const CategoriesPage = lazy(() =>
  import("./pages/CategoriesPage/CategoriesPage")
);
const AddRecipesPage = lazy(() =>
  import("./pages/AddRecipesPage/AddRecipesPage")
);
const MyRecipesPage = lazy(() => import("./pages/MyRecipesPage/MyRecipesPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const ShoppingListPage = lazy(() =>
  import("./pages/ShoppingListPage/ShoppingListPage")
);
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(verifyUser());
  }, [dispatch, token]);

  return isRefreshing ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : (
    <div>
      <Routes>
        <Route
          index
          element={<RestrictedRoute component={WelcomePage} path="/main" />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={RegisterPage} path="/main" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={SigninPage} path="/main" />}
        />
        <Route element={<SharedLayout />}>
          <Route
            path="/main"
            element={<PrivateRoute component={MainPage} path="/" />}
          />
          <Route
            path="/categories/:category"
            element={<PrivateRoute component={CategoriesPage} path="/" />}
          />
          <Route
            path="/add"
            element={<PrivateRoute component={AddRecipesPage} path="/" />}
          />
          <Route
            path="/my"
            element={<PrivateRoute component={MyRecipesPage} path="/" />}
          />
          <Route
            path="/favorite"
            element={<PrivateRoute component={FavoritePage} path="/" />}
          />
          <Route
            path="/shopping-list"
            element={<PrivateRoute component={ShoppingListPage} path="/" />}
          />
          <Route
            path="/search"
            element={<PrivateRoute component={SearchPage} path="/" />}
          />
          <Route
            path="/recipe/:id"
            element={<PrivateRoute component={RecipePage} path="/" />}
          />
          <Route
            path="*"
            element={<PrivateRoute component={NotFound} path="/" />}
          />
        </Route>
      </Routes>
    </div>
  );
};

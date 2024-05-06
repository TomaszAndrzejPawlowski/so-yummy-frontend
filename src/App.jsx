import "./App.css";
import { lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { verifyUser } from "./redux/auth/operations";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import Categories from "./pages/Categories/Categories";

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(verifyUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <p>Ładowanie...</p>
    </div>
  ) : (
    <div>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={Register} path="/category" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={Login} path="/category" />}
        />
        <Route element={<SharedLayout />}>
          <Route
            path="/category"
            element={<PrivateRoute component={Categories} path="/" />}
          />
        </Route>
      </Routes>
    </div>
  );
};

import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {
  useDispatch,
  // , useSelector
} from "react-redux";
import { fetchUser } from "../../redux/user/operations";
// import { selectIsLoading } from "../../redux/user/selectors";

export const SharedLayout = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchUser());
    };
    fetchData();
  }, [dispatch]);

  // isLoading ? (
  //   <>Loading...</>
  // ) :
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading.....</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

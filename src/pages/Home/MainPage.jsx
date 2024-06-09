import { Helmet } from "react-helmet";
import Search from "./components/Search/Search";
import ChooseYourBreakfast from "./components/ChooseYourBreakfast/ChooseYourBreakfast";
import PreviewCategories from "./components/PreviewCategories/PreviewCategories";
import { useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchIngredientsList,
  fetchRecipesForMainPage,
} from "../../redux/recipes/operations";
import { useEffect } from "react";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchRecipesForMainPage());
      await dispatch(fetchCategories());
      await dispatch(fetchIngredientsList());

      console.log("działa");
    };
    fetchData();
  }, [dispatch]);

  return (
    <main>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <div>
        <h1>
          <span>So</span>Yummy
        </h1>
        <p>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </p>
        <Search />
      </div>
      <ChooseYourBreakfast />
      <PreviewCategories />
    </main>
  );
};

export default MainPage;

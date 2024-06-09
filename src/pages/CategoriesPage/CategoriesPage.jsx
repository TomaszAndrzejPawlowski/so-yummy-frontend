import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  // fetchCategories,
  fetchRecipesForCategory,
} from "../../redux/recipes/operations";
import {
  selectCategories,
  selectIsLoading,
  selectRecipesByCategory,
} from "../../redux/recipes/selectors";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const categories = useSelector(selectCategories);
  const recipesForCategory = useSelector(selectRecipesByCategory);

  useEffect(() => {
    const fetchData = async () => {
      // await dispatch(fetchCategories());
      await dispatch(fetchRecipesForCategory(category));
    };
    fetchData();
  }, [dispatch, category]);

  // console.log(recipesForCategory);
  // console.log(categories);
  // console.log(isLoading);

  if (recipesForCategory && categories) {
    return isLoading ? (
      <>Loading</>
    ) : (
      <>
        <Helmet>
          <title>Categories</title>
        </Helmet>
        <MainPageTitle title="Categories" />
        <ul>
          {categories.map((category) =>
            category ? (
              <li key={category.title}>
                <NavLink to={`/categories/${category.title}`}>
                  {category.title}
                </NavLink>
              </li>
            ) : (
              <></>
            )
          )}
        </ul>
        <ul>
          {recipesForCategory.slice(0, 8).map((recipe) =>
            recipe ? (
              <li key={recipe.id}>
                <NavLink to={`/recipe/${recipe._id}`}>
                  <figure>
                    <img src={recipe.preview} alt={`${recipe.title}`} />
                    <figcaption>{`${recipe.title}`}</figcaption>
                  </figure>
                </NavLink>
              </li>
            ) : (
              <></>
            )
          )}
        </ul>
      </>
    );
  }
  return (
    <>
      Nie działa poprawnie useEffect, nie działa od razu przy załadowaniu strony
    </>
  );
};

export default CategoriesPage;

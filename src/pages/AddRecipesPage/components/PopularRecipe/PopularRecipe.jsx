import { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularRecipes } from "../../../../redux/recipes/operations";
import { selectPopularRecipes } from "../../../../redux/recipes/selectors";
import { NavLink } from "react-router-dom";

const PopularRecipe = () => {
  const dispatch = useDispatch();
  const popularRecipes = useSelector(selectPopularRecipes);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchPopularRecipes());
    };
    fetchData();
  }, []);

  console.log(popularRecipes);

  return (
    <>
      <SectionTitle title="Popular recipe" />
      <ul>
        {popularRecipes ? (
          popularRecipes.map((recipe) => (
            <li key={recipe._id}>
              <NavLink to={`/recipe/${recipe._id}`}>
                <figure>
                  <img src={recipe.preview} alt={`${recipe.title}`} />
                  <figcaption>{`${recipe.title}`}</figcaption>
                  <figcaption>{`${recipe.description}`}</figcaption>
                </figure>
              </NavLink>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </>
  );
};

export default PopularRecipe;

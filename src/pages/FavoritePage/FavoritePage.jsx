import { Helmet } from "react-helmet";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import { useDispatch, useSelector } from "react-redux";
import { selectUserFavRecipes } from "../../redux/user/selectors";
import { useEffect, useState } from "react";
import {
  fetchFavoriteRecipes,
  removeRecipeFromFav,
} from "../../redux/user/operations";
import icons from "../../img/svg/iconsSprite.svg";
import css from "./FavoritePage.module.css";
import { NavLink } from "react-router-dom";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(selectUserFavRecipes);
  const [displayedRecipes, setDisplayedRecipes] = useState([
    ...favoriteRecipes,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchFavoriteRecipes());
    };
    fetchData();
  }, [dispatch]);

  const handleRemoveFromFav = (id) => {
    const newArray = [...displayedRecipes];
    const recipeIndex = newArray.findIndex((recipe) => recipe._id === id);
    newArray.splice(recipeIndex, 1);
    setDisplayedRecipes(newArray);
    dispatch(removeRecipeFromFav({ id }));
  };

  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <MainPageTitle title="Favorites" />
      <ul>
        {displayedRecipes ? (
          displayedRecipes.map((recipe) => (
            <li key={recipe._id}>
              <img src={recipe.preview} alt={`${recipe.title}`} />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <p>{recipe.time} min</p>
              <button
                className={css.trash__button}
                type="button"
                onClick={() => handleRemoveFromFav(recipe._id)}
              >
                <svg className={css.trash__svg}>
                  <use href={`${icons}#icon-trash`}></use>
                </svg>
              </button>
              <NavLink to={`/recipe/${recipe._id}`}>See recipe</NavLink>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </>
  );
};

export default FavoritePage;

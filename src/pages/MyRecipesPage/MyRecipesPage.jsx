import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { selectUserAddedRecipes } from "../../redux/user/selectors";
import {
  fetchOwnedRecipes,
  removeOwnRecipe,
} from "../../redux/user/operations";
import { useEffect } from "react";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import icons from "../../img/svg/iconsSprite.svg";
import css from "./MyRecipesPage.module.css";

const MyRecipesPage = () => {
  const dispatch = useDispatch();
  const ownRecipes = useSelector(selectUserAddedRecipes);
  const [displayedRecipes, setDisplayedRecipes] = useState([...ownRecipes]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchOwnedRecipes());
    };
    fetchData();
  }, [dispatch]);

  const handleRemoveFromFav = (id) => {
    const newArray = [...displayedRecipes];
    const recipeIndex = newArray.findIndex((recipe) => recipe._id === id);
    newArray.splice(recipeIndex, 1);
    setDisplayedRecipes(newArray);
    dispatch(removeOwnRecipe({ id }));
  };

  return (
    <>
      <Helmet>
        <title>My recipes</title>
      </Helmet>
      <MainPageTitle title="My recipes" />
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

export default MyRecipesPage;

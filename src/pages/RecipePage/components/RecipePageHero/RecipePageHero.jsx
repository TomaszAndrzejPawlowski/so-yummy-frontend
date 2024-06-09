import { useDispatch, useSelector } from "react-redux";
import MainPageTitle from "../../../../components/MainPageTitle/MainPageTitle";
import { selectUserFavRecipes } from "../../../../redux/user/selectors";
import icons from "../../../../img/svg/iconsSprite.svg";
import css from "./RecipePageHero.module.css";
import {
  addRecipeToFav,
  removeRecipeFromFav,
} from "../../../../redux/user/operations";
import { selectIsLoading } from "../../../../redux/recipes/selectors";

const RecipePageHero = ({ id, title, description, time }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const userFavRecipes = useSelector(selectUserFavRecipes);

  const handleRemoveFavRecipe = (e) => {
    e.preventDefault();
    dispatch(removeRecipeFromFav({ id }));
  };

  const handleAddFavRecipe = (e) => {
    e.preventDefault();
    dispatch(addRecipeToFav({ id }));
  };

  return isLoading ? (
    <>Loading...</>
  ) : (
    <>
      <MainPageTitle title={title} />
      <p>{description}</p>
      {userFavRecipes.includes(id) ? (
        <button type="button" onClick={handleRemoveFavRecipe}>
          Remove from favorite recipes
        </button>
      ) : (
        <button type="button" onClick={handleAddFavRecipe}>
          Add to favorite recipes
        </button>
      )}
      <p>
        <svg className={css.clock__svg}>
          <use href={`${icons}#icon-clock`}></use>
        </svg>
        {time} min
      </p>
    </>
  );
};

export default RecipePageHero;

import { useParams } from "react-router-dom";
import RecipeIngredientsList from "./components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePageHero from "./components/RecipePageHero/RecipePageHero";
import RecipePreparation from "./components/RecipePreparation/RecipePreparation";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIngredients,
  // selectIsLoading,
  selectRecipeById,
} from "../../redux/recipes/selectors";
import { useEffect } from "react";
import {
  fetchIngredientsList,
  fetchRecipeById,
} from "../../redux/recipes/operations";
import { Helmet } from "react-helmet";

const RecipePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const isLoading = useSelector(selectIsLoading);
  const recipeById = useSelector(selectRecipeById);
  const ingredientList = useSelector(selectIngredients);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchRecipeById(id));
      await dispatch(fetchIngredientsList());
    };
    fetchData();
  }, [dispatch, id]);

  if (recipeById) {
    return (
      <>
        <Helmet>
          <title>Recipe</title>
        </Helmet>
        <RecipePageHero
          id={id}
          title={recipeById.title}
          description={recipeById.description}
          time={recipeById.time}
        />
        <RecipeIngredientsList
          recipeIngredients={recipeById.ingredients}
          ingredientList={ingredientList}
        />
        <RecipePreparation
          title={recipeById.title}
          instructions={recipeById.instructions}
          preview={recipeById.preview}
        />
      </>
    );
  }
  return <></>;
};

export default RecipePage;

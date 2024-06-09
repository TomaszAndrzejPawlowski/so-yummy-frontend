import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipesForMainPage } from "../../../../redux/recipes/operations";
import { selectRecipesForMainPage } from "../../../../redux/recipes/selectors";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";

const randomizeRecipes = (recipes) => {
  const newRecipesArray = recipes.slice();
  for (let i = newRecipesArray.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + i));
    [newRecipesArray[i], newRecipesArray[random]] = [
      newRecipesArray[random],
      newRecipesArray[i],
    ];
  }
  return newRecipesArray;
};

const getRandomRecipes = (recipesArr, n) => {
  const randomized = randomizeRecipes(recipesArr);
  return randomized.slice(0, n);
};

const PreviewCategories = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const recipesForMainPage = useSelector(selectRecipesForMainPage);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchRecipesForMainPage());
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const getRandomRecipesByCategory = (recipes, category, count) => {
    const filteredRecipes = recipes.filter(
      (recipe) => recipe.category === category
    );
    return getRandomRecipes(filteredRecipes, count);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const dessertRecipes = getRandomRecipesByCategory(
    recipesForMainPage,
    "Dessert",
    4
  );
  const breakfastRecipes = getRandomRecipesByCategory(
    recipesForMainPage,
    "Breakfast",
    4
  );
  const miscellaneousRecipes = getRandomRecipesByCategory(
    recipesForMainPage,
    "Miscellaneous",
    4
  );
  const chickenRecipes = getRandomRecipesByCategory(
    recipesForMainPage,
    "Chicken",
    4
  );

  return (
    <>
      <ul>
        <li key={nanoid()}>
          <h3>Breakfast</h3>
        </li>
        {breakfastRecipes.map((recipe) =>
          recipe ? (
            <li key={nanoid()}>
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
        <li key={nanoid()}>
          <NavLink to="/categories/Breakfast">See all</NavLink>
        </li>
      </ul>
      <ul>
        <li key={nanoid()}>
          <h3>Miscellaneous</h3>
        </li>
        {miscellaneousRecipes.map((recipe) =>
          recipe ? (
            <li key={nanoid()}>
              <NavLink to="">
                <img src={recipe.preview} alt={`${recipe.title}`} />
                <div>{`${recipe.title}`}</div>
              </NavLink>
            </li>
          ) : (
            <></>
          )
        )}
        <li key={nanoid()}>
          <NavLink to="/categories/Miscellaneous">See all</NavLink>
        </li>
      </ul>
      <ul>
        <li key={nanoid()}>
          <h3>Chicken</h3>
        </li>
        {chickenRecipes.map((recipe) =>
          recipe ? (
            <li key={nanoid()}>
              <NavLink to="">
                <img src={recipe.preview} alt={`${recipe.title}`} />
                <div>{`${recipe.title}`}</div>
              </NavLink>
            </li>
          ) : (
            <></>
          )
        )}
        <li key={nanoid()}>
          <NavLink to="/categories/Chicken">See all</NavLink>
        </li>
      </ul>
      <ul>
        <li key={nanoid()}>
          <h3>Dessert</h3>
        </li>
        {dessertRecipes.map((recipe) =>
          recipe ? (
            <li key={nanoid()}>
              <NavLink to="">
                <img src={recipe.preview} alt={`${recipe.title}`} />
                <div>{`${recipe.title}`}</div>
              </NavLink>
            </li>
          ) : (
            <></>
          )
        )}
        <li key={nanoid()}>
          <NavLink to="/categories/Dessert">See all</NavLink>
        </li>
      </ul>
    </>
  );
};

export default PreviewCategories;

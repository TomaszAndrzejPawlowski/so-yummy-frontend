import { useDispatch } from "react-redux";
import { addIngredientToShoppingList } from "../../../../redux/user/operations";

const RecipeIngredientsList = ({ recipeIngredients, ingredientList }) => {
  const dispatch = useDispatch();

  const ingredientsListToDisplay = recipeIngredients
    .map((recipeIngredient) => {
      const foundIngredient = ingredientList.find(
        (ingredient) => ingredient._id === recipeIngredient.id
      );
      if (foundIngredient) {
        return {
          ...foundIngredient,
          measure: recipeIngredient.measure,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  const handleAddToShoppingList = (ingredient, e) => {
    e.preventDefault();
    dispatch(addIngredientToShoppingList(ingredient));
  };

  return (
    <>
      <div>
        <p>Ingredients</p>
        <p>Number</p>
        <p>Add to list</p>
      </div>
      <ul>
        {ingredientsListToDisplay.map((ingredient) => {
          return (
            <li key={ingredient._id}>
              <img src={ingredient.thb} alt={ingredient.ttl} />
              <p>{ingredient.ttl}</p>
              <p>{ingredient.measure}</p>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleAddToShoppingList(
                    {
                      id: ingredient._id,
                      thb: ingredient.thb,
                      ttl: ingredient.ttl,
                      measure: ingredient.measure,
                    },
                    e
                  )
                }
              ></input>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RecipeIngredientsList;

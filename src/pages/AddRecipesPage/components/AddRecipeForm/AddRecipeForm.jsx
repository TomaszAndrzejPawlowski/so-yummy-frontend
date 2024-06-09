import { useDispatch } from "react-redux";
import RecipeDescriptionFields from "./RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields/RecipePreparationFields";
import { useState } from "react";
import { addOwnRecipe } from "../../../../redux/user/operations";

const AddRecipeForm = () => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState({
    title: "",
    about: "",
    category: "",
    time: "",
    image: null,
  });

  const [ingredients, setIngredients] = useState([
    { id: "", name: "", measure: "", amount: "" },
  ]);

  const [instructions, setInstructions] = useState("");

  const handleDescriptionChange = (e) => {
    const { name, value, files } = e.target;
    setDescription((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleIngredientsChange = (newIngredients) => {
    setIngredients(newIngredients);
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", description.title);
    formData.append("description", description.about);
    formData.append("category", description.category);
    formData.append("time", description.time);
    formData.append("image", description.image);
    formData.append("instructions", instructions);

    ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][id]`, ingredient.id);
      formData.append(
        `ingredients[${index}][measure]`,
        `${ingredient.amount} ${ingredient.measure}`
      );
    });
    console.log(formData);
    dispatch(addOwnRecipe(formData));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <RecipeDescriptionFields
          onChange={handleDescriptionChange}
          description={description}
        />
        <RecipeIngredientsFields
          onChange={handleIngredientsChange}
          ingredients={ingredients}
        />
        <RecipePreparationFields
          onChange={handleInstructionsChange}
          instructions={instructions}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddRecipeForm;

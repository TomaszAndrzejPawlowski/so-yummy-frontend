import SectionTitle from "../../SectionTitle/SectionTitle";
import { useSelector } from "react-redux";
import { selectIngredients } from "../../../../../redux/recipes/selectors";
import AsyncSelect from "react-select/async";
import Select from "react-select";

const RecipeIngredientsFields = ({ onChange, ingredients }) => {
  const ingredientsList = useSelector(selectIngredients);

  const sortedIngredients = [...ingredientsList].sort((firstIng, secondIng) =>
    firstIng.ttl.localeCompare(secondIng.ttl)
  );

  const ingredientOptions = sortedIngredients.map((ingredient) => ({
    value: ingredient._id,
    label: ingredient.ttl,
  }));

  const measurementOptions = [
    { value: "", label: "" },
    { value: "tbs", label: "tbs" },
    { value: "tsp", label: "tsp" },
    { value: "kg", label: "kg" },
    { value: "g", label: "g" },
    { value: "l", label: "l" },
    { value: "ml", label: "ml" },
  ];

  const handleRemoveField = (index) => {
    const newIngredients = [...ingredients];
    if (ingredients.length > 1) {
      newIngredients.splice(index, 1);
      onChange(newIngredients);
    }
  };

  const handleAddField = () => {
    onChange([
      ...ingredients,
      { id: "", name: "", measure: "empty", amount: "" },
    ]);
  };

  const handleChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    onChange(newIngredients);
  };

  const handleIngredientChange = (index, selectedOption) => {
    const newIngredients = [...ingredients];
    newIngredients[index].id = selectedOption ? selectedOption.value : "";
    newIngredients[index].name = selectedOption ? selectedOption.label : "";
    onChange(newIngredients);
  };

  const filterIngredients = (inputValue) => {
    return ingredientOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterIngredients(inputValue));
    }, 500);
  };

  return (
    <>
      <SectionTitle title="Ingredients" />
      <button
        type="button"
        onClick={() => handleRemoveField(ingredients.length - 1)}
        disabled={ingredients.length <= 1}
      >
        -
      </button>
      <span>{ingredients.length}</span>
      <button type="button" onClick={handleAddField}>
        +
      </button>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <AsyncSelect
            required
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions={ingredientOptions}
            value={ingredientOptions.find(
              (option) => option.value === ingredient.id
            )}
            onChange={(selectedOption) =>
              handleIngredientChange(index, selectedOption)
            }
            placeholder="Select ingredient"
            isClearable
          />
          <input
            required
            type="text"
            placeholder="Amount"
            value={ingredient.amount}
            onChange={(e) => handleChange(index, "amount", e.target.value)}
          />
          <Select
            required
            value={measurementOptions.find(
              (option) => option.value === ingredient.measure
            )}
            onChange={(selectedOption) =>
              handleChange(
                index,
                "measure",
                selectedOption ? selectedOption.value : "empty"
              )
            }
            options={measurementOptions}
            placeholder="Measure"
            isClearable
          />
          <button type="button" onClick={() => handleRemoveField(index)}>
            X
          </button>
        </div>
      ))}
    </>
  );
};
export default RecipeIngredientsFields;

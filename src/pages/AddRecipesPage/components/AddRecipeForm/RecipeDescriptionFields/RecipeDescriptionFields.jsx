import { useSelector } from "react-redux";
import { selectCategories } from "../../../../../redux/recipes/selectors";

const RecipeDescriptionFields = ({ onChange, description }) => {
  const categoriesList = useSelector(selectCategories);

  const generateTimeOptions = () => {
    const options = [];
    for (let i = 5; i <= 180; i += 5) {
      options.push(i);
    }
    return options;
  };

  const timeOptionsArray = generateTimeOptions();

  return (
    <>
      <input
        required
        type="file"
        name="image"
        accept="image/*"
        onChange={onChange}
      />
      <input
        required
        type="text"
        name="title"
        placeholder="Enter recipe title"
        value={description.title}
        onChange={onChange}
      />
      <input
        required
        type="text"
        name="about"
        placeholder="Enter about recipe"
        value={description.about}
        onChange={onChange}
      />
      <label htmlFor="category">Category</label>
      <select
        required
        id="category"
        name="category"
        value={description.category}
        onChange={onChange}
      >
        {categoriesList.map((category) => (
          <option key={category.title} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
      <label htmlFor="time">Cooking time</label>
      <select
        required
        id="time"
        name="time"
        value={description.time}
        onChange={onChange}
      >
        {timeOptionsArray.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
        <option key="180+" value="180+">
          180+
        </option>
      </select>
    </>
  );
};

export default RecipeDescriptionFields;

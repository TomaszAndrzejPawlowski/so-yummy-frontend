import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { searchByTitle } from "../../../../redux/recipes/operations";

const Search = () => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  console.log(urlSearchParams);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrlSearchParams({ query: e.target.elements.input.value });
    dispatch(searchByTitle(e.target.elements.input.value));
  };

  return (
    <div>
      <form>
        <input type="text" name="input" placeholder="Recipe name" required />
        <button type="submit" onSubmit={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

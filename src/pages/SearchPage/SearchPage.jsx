import { Helmet } from "react-helmet";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchedRecipesList from "./components/SearchedRecipesList/SearchedRecipesList";

const SearchPage = () => {
  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <MainPageTitle title="Search" />
      <SearchBar />
      <SearchedRecipesList />
    </>
  );
};

export default SearchPage;

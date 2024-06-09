import { Helmet } from "react-helmet";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import PopularRecipe from "./components/PopularRecipe/PopularRecipe";
import AddRecipeForm from "./components/AddRecipeForm/AddRecipeForm";
import FollowUsSection from "./components/FollowUsSection/FollowUsSection";
const AddRecipesPage = () => {
  return (
    <>
      <Helmet>
        <title>Add recipe</title>
      </Helmet>
      <MainPageTitle title="Add recipe" />
      <AddRecipeForm />
      <FollowUsSection />
      <PopularRecipe />
    </>
  );
};

export default AddRecipesPage;

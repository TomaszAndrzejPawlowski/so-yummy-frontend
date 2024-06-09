import SectionTitle from "../../SectionTitle/SectionTitle";

const RecipePreparationFields = ({ onChange, instructions }) => {
  return (
    <>
      <SectionTitle title="Recipe Preparation" />
      <textarea
        required
        name="preparation"
        rows="5"
        placeholder="Enter recipe"
        value={instructions}
        onChange={onChange}
      ></textarea>
    </>
  );
};
export default RecipePreparationFields;

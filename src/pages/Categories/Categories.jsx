import { Helmet } from "react-helmet";

const Categories = () => {
  return (
    <>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      <div>
        <h1>
          <span>So</span>Yummy
        </h1>
        <p>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </p>
        <form>
          <input type="text" name="input" placeholder="Recipe name" required />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <img src="../../img/breakfast-dish.png" alt="Display breakfast dish" />
      </div>
      <div></div>
    </>
  );
};

export default Categories;

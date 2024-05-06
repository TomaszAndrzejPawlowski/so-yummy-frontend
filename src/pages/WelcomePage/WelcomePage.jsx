import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <div>
        <svg width={"100px"} height={"100px"}>
          <use href="../../img/svg/iconsSprite.svg#icon-logo"></use>
        </svg>
        <h2>Welcome to the app!</h2>
        <p>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <NavLink to="/register">Registration</NavLink>
        <NavLink to="/login">Sign in</NavLink>
      </div>
    </main>
  );
};

export default WelcomePage;

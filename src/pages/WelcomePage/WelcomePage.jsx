import { Helmet } from "react-helmet";
import css from "./WelcomePage.module.css";
import icons from "../../img/svg/iconsSprite.svg";
import AuthNav from "./components/AuthNav/AuthNav";

const WelcomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <div>
        <svg className={css.logo__svg}>
          <use href={`${icons}#icon-logo`} />
        </svg>
        <h2>Welcome to the app!</h2>
        <p>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <AuthNav />
      </div>
    </main>
  );
};

export default WelcomePage;

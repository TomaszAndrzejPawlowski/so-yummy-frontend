import css from "./Logo.module.css";
import icons from "../../../../img/svg/iconsSprite.svg";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <NavLink to="/main">
        <svg className={css.logo__svg}>
          <use href={`${icons}#icon-logo`}></use>
        </svg>
      </NavLink>
    </div>
  );
};

export default Logo;

import css from "./Navigation.module.css";
import icons from "../../../../img/svg/iconsSprite.svg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/categories/Beef">Categories</NavLink>
      <NavLink to="/add">Add recipes</NavLink>
      <NavLink to="/my">My recipes</NavLink>
      <NavLink to="/favorite">Favorites</NavLink>
      <NavLink to="/shopping-list">Shopping list</NavLink>
      <NavLink to="/search">
        <svg className={css.search__svg}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
      </NavLink>
    </nav>
  );
};

export default Navigation;

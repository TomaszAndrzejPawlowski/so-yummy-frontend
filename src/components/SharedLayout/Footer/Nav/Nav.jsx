import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/search">Ingredients</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/add">Add recipes</NavLink>
      <NavLink to="/my">My recipes</NavLink>
      <NavLink to="/favorite">Favorites</NavLink>
      <NavLink to="/shopping-list">Shopping list</NavLink>
    </nav>
  );
};

export default Nav;

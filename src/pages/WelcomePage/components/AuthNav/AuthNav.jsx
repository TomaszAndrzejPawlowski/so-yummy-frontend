import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Sign in</NavLink>
    </>
  );
};

export default AuthNav;

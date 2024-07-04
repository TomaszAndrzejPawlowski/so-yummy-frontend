// import css from "./Header.module.css";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import UserLogo from "./UserLogo/UserLogo";
import ThemeToggler from "./ThemeToggler/ThemeToggler";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
      <UserLogo />
      <ThemeToggler />
    </header>
  );
};

export default Header;

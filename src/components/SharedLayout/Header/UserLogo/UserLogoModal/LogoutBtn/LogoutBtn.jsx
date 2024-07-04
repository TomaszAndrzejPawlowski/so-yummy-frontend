import { useDispatch } from "react-redux";
// import css from "./LogoutBtn.module.css";
import { logout } from "../../../../../../redux/auth/operations";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <button type="button" onClick={handleLogout}>
      Log out &rarr;
    </button>
  );
};

export default LogoutBtn;

import { useState } from "react";
import css from "./UserLogo.module.css";
import noAvatar from "../../../../img/noAvatar.png";
import { useSelector } from "react-redux";
import {
  selectUserAvatar,
  selectUserName,
} from "../../../../redux/user/selectors";
import UserLogoModal from "./UserLogoModal/UserLogoModal";

const UserLogo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);

  const toggleMenuModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const displayedAvatar = userAvatar ? userAvatar : noAvatar;

  return (
    <>
      <div onClick={toggleMenuModal}>
        <img
          className={css.displayedAvatar}
          src={displayedAvatar}
          alt="User avatar"
        />
        <p>{userName}</p>
      </div>
      {isModalOpen && <UserLogoModal userName={userName} />}
    </>
  );
};

export default UserLogo;

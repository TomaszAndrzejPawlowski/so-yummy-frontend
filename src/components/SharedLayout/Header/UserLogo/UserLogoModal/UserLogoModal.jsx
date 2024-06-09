import { useState } from "react";
import icons from "../../../../../img/svg/iconsSprite.svg";
import css from "./UserLogoModal.module.css";
import UserInfoModal from "./UserInfoModal/UserInfoModal";
import LogoutBtn from "./LogoutBtn/LogoutBtn";

const UserLogoModal = ({ userName }) => {
  const [isEditUserModalOpen, setIsEditUserModalOpan] = useState(false);

  const toggleEditUserModal = () => {
    setIsEditUserModalOpan(!isEditUserModalOpen);
  };

  return (
    <div>
      {!isEditUserModalOpen ? (
        <div>
          <div onClick={toggleEditUserModal}>
            Edit profile
            <svg className={css.edit__svg}>
              <use href={`${icons}#icon-edit`}></use>
            </svg>
          </div>
          <LogoutBtn />
        </div>
      ) : (
        <UserInfoModal
          userName={userName}
          toggleEditUserModal={toggleEditUserModal}
        />
      )}
    </div>
  );
};

export default UserLogoModal;

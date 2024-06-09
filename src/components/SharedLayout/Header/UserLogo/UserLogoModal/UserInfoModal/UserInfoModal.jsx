import css from "./UserInfoModal.module.css";
import icons from "../../../../../../img/svg/iconsSprite.svg";
import { useDispatch } from "react-redux";
import { editUser } from "../../../../../../redux/user/operations";

const UserInfoModal = ({ userName, toggleEditUserModal }) => {
  const dispatch = useDispatch();

  const handleEditUser = (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    const name = e.target.name.value;
    const formData = new FormData();

    if (!image) {
      formData.append("name", name);
    } else {
      formData.append("image", image);
      formData.append("name", name);
    }
    dispatch(editUser(formData));
  };

  return (
    <div>
      <div onClick={toggleEditUserModal}>
        <svg className={css.close__svg}>
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </div>
      <form onSubmit={handleEditUser}>
        <input type="file" name="image" accept="image/*" />
        <div>
          <svg className={css.user__svg}>
            <use href={`${icons}#icon-user`}></use>
          </svg>
          <input type="text" name="name" defaultValue={userName}></input>
        </div>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};

export default UserInfoModal;

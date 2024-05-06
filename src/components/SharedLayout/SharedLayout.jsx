import { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectUserAvatar, selectUserName } from "../../redux/user/selectors";
import { logout } from "../../redux/auth/operations";
import { editUser, subscribeToNews } from "../../redux/user/operations";

export const SharedLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditUserModalOpan, setIsEditUserModalOpan] = useState(false);
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    // e.prevent.default();
    dispatch(logout());
  };
  const handleSubscribe = (e) => {
    e.prevent.default();
    const subscribeEmail = e.target.subscribeEmail.value;

    dispatch(subscribeToNews(subscribeEmail));
  };

  const toggleMenuModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleEdutUserModal = () => {
    setIsEditUserModalOpan(!isEditUserModalOpan);
  };

  const handleEditUser = (e) => {
    e.prevent.default();
    const image = e.target.image.files[0];
    const name = e.target.name.value;

    dispatch(editUser({ name, image }));
  };

  return (
    <div>
      <header>
        <div>
          <svg width="44px" height="44px">
            <use href="../../img/svg/iconsSprite.svg#icon-logo"></use>
          </svg>
        </div>
        <div>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/add">Add recipes</NavLink>
          <NavLink to="/my">My recipes</NavLink>
          <NavLink to="/favorite">Favorites</NavLink>
          <NavLink to="/shopping-list">Shopping list</NavLink>
          <NavLink to="/search">
            <svg width="24px" height="24px">
              <use href="../../img/svg/iconsSprite.svg#icon-search"></use>
            </svg>
          </NavLink>
        </div>
        <div onClick={toggleMenuModal}>
          <img src={userAvatar} alt="User avatar" />
          <p>{userName}</p>
        </div>
        <div>
          <img src="../../img/switch-light.png" alt="Switch to dark theme" />
        </div>
        {isModalOpen && (
          <div>
            <div onClick={toggleEdutUserModal}>
              Edit profile
              <svg width="14px" height="14px">
                <use href="../../img/svg/iconsSprite.svg#icon-edit"></use>
              </svg>
            </div>
            <button type="button" onClick={handleLogout}>
              Log out &rarr;
            </button>
          </div>
        )}
        {isEditUserModalOpan && (
          <div>
            <div onClick={toggleEdutUserModal}>
              <svg width="24px" height="24px">
                <use href="../../img/svg/iconsSprite.svg#icon-close"></use>
              </svg>
            </div>
            <form onSubmit={handleEditUser}>
              <input type="file" name="image" accept="image/*" />
              <div>
                <svg width="24px" height="24px">
                  <use href="../../img/svg/iconsSprite.svg#icon-user"></use>
                </svg>
                <input type="text" name="name" placeholder={userName}></input>
              </div>
              <button type="submit">Save changes</button>
            </form>
          </div>
        )}
      </header>
      <Suspense fallback={<div>Loading.....</div>}>
        <Outlet />
      </Suspense>
      <footer>
        <div>
          <div>
            <svg width="44px" height="44px">
              <use href="../../img/svg/iconsSprite.svg#icon-logo"></use>
            </svg>
            <h3>So Yummy</h3>
          </div>
          <ul>
            <li>Database of recipes that can be replenished </li>
            <li>Flexible search for desired and unwanted ingredients</li>
            <li>Ability to add your own recipes with photos</li>
            <li>Convenient and easy to use</li>
          </ul>
        </div>
        <div>
          <NavLink to="/search">Ingredients</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/add">Add recipes</NavLink>
          <NavLink to="/my">My recipes</NavLink>
          <NavLink to="/favorite">Favorites</NavLink>
          <NavLink to="/shopping-list">Shopping list</NavLink>
        </div>
        <div>
          <h4>Subscribe to our Newsletter</h4>
          <p>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </p>
          <form onSubmit={handleSubscribe}>
            <div>
              <svg width="20px" height="16px">
                <use href="../../img/svg/iconsSprite.svg#icon-envelope"></use>
              </svg>
              <input
                type="email"
                name="subscribeEmail"
                placeholder="Enter your email address"
                required
              />
            </div>
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div>
          <ul>
            <li>
              <a href="https://www.facebook.com/">
                <svg width="20px" height="20px">
                  <use href="../../img/svg/iconsSprite.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <svg width="20px" height="15px">
                  <use href="../../img/svg/iconsSprite.svg#icon-youtube"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <svg width="20px" height="16px">
                  <use href="../../img/svg/iconsSprite.svg#icon-twitter"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <svg width="20px" height="20px">
                  <use href="../../img/svg/iconsSprite.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p> &copy; 2024 All Rights Reserved.</p>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

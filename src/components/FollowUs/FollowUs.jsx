import css from "./FollowUs.module.css";
import icons from "../../img/svg/iconsSprite.svg";
import { nanoid } from "nanoid";

const FollowUs = () => {
  return (
    <div>
      <ul>
        <li key={nanoid()}>
          <a href="https://www.facebook.com/">
            <svg className={css.facebook__svg}>
              <use href={`${icons}#icon-facebook`}></use>
            </svg>
          </a>
        </li>
        <li key={nanoid()}>
          <a href="https://www.youtube.com/">
            <svg className={css.youtube__svg}>
              <use href={`${icons}#icon-youtube`}></use>
            </svg>
          </a>
        </li>
        <li key={nanoid()}>
          <a href="https://twitter.com/">
            <svg className={css.twitter__svg}>
              <use href={`${icons}#icon-twitter`}></use>
            </svg>
          </a>
        </li>
        <li key={nanoid()}>
          <a href="https://www.instagram.com/">
            <svg className={css.instagram__svg}>
              <use href={`${icons}#icon-instagram`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FollowUs;

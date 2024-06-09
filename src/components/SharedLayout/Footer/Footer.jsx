import css from "./Footer.module.css";
import icons from "../../../img/svg/iconsSprite.svg";
import FollowUs from "../../FollowUs/FollowUs";
import Nav from "./Nav/Nav";
import SubscribeForm from "./SubscribeForm/SubscribeForm";
import { nanoid } from "nanoid";

const Footer = () => {
  return (
    <footer>
      <section className={css.footer__section}>
        <div>
          <div>
            <svg className={css.footer_logo__svg}>
              <use href={`${icons}#icon-logo`}></use>
            </svg>
            <h3>So Yummy</h3>
          </div>
          <ul>
            <li key={nanoid()}>Database of recipes that can be replenished </li>
            <li key={nanoid()}>
              Flexible search for desired and unwanted ingredients
            </li>
            <li key={nanoid()}>Ability to add your own recipes with photos</li>
            <li key={nanoid()}>Convenient and easy to use</li>
          </ul>
        </div>
        <Nav />
        <SubscribeForm />
        <FollowUs />
      </section>
      <div>
        <p> &copy; 2024 Tomasz Andrzej Pawłowski All Rights Reserved.</p>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;

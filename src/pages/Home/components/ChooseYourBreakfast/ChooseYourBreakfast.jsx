import { NavLink } from "react-router-dom";
import BreakfastDish from "../../../../img/breakfast-dish.png";
import icons from "../../../../img/svg/iconsSprite.svg";
import css from "./ChooseYourBreakfast.module.css";

const ChooseYourBreakfast = () => {
  return (
    <div>
      <div>
        <img src={BreakfastDish} alt="Display breakfast dish" />
      </div>
      <div>
        <p>
          <span>Delicious and healthy</span> way to enjoy a variety of fresh
          ingredients in one satisfying meal
        </p>
        <NavLink to="/categories/Breakfast">See recipes &rarr;</NavLink>
      </div>
      <svg className={css.swirlArrow__svg}>
        <use href={`${icons}#icon-swirlArrow`}></use>
      </svg>
    </div>
  );
};

export default ChooseYourBreakfast;

import { useDispatch } from "react-redux";
import css from "./SubscribeForm.module.css";
import icons from "../../../../img/svg/iconsSprite.svg";
import { subscribeToNews } from "../../../../redux/user/operations";

const SubscribeForm = () => {
  const dispatch = useDispatch();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const subscribeEmail = {
      email: e.target.subscribeEmail.value,
    };
    dispatch(subscribeToNews(subscribeEmail));
  };

  return (
    <section>
      <h4>Subscribe to our Newsletter</h4>
      <p>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <form onSubmit={handleSubscribe}>
        <div>
          <svg className={css.envelope__svg}>
            <use href={`${icons}#icon-envelope`}></use>
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
    </section>
  );
};

export default SubscribeForm;

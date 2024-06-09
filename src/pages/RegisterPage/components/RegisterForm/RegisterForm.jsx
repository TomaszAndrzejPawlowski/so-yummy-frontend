import { useDispatch } from "react-redux";
import { register } from "../../../../redux/auth/operations";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(register({ name, email, password }));
  };

  return (
    <main>
      <div>
        <form onSubmit={handleRegistration}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Sign up</button>
        </form>
        <NavLink to="/login">Sign in</NavLink>
      </div>
    </main>
  );
};

export default RegisterForm;

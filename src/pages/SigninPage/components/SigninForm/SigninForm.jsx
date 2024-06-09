import { useDispatch } from "react-redux";
import { login } from "../../../../redux/auth/operations";
import { NavLink } from "react-router-dom";

const SigninForm = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(login({ email, password }));
  };

  return (
    <main>
      <div>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Sign in</button>
        </form>
        <NavLink to="/register">Registration</NavLink>
      </div>
    </main>
  );
};

export default SigninForm;

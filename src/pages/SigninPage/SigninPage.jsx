import { Helmet } from "react-helmet";
import SigninForm from "./components/SigninForm/SigninForm";

const SigninPage = () => {
  return (
    <div>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <SigninForm />
    </div>
  );
};

export default SigninPage;

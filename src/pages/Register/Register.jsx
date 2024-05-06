import { Helmet } from "react-helmet";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
};

export default Register;

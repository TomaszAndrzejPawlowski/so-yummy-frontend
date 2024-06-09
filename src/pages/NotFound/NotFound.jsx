import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <h3>We are sorry,</h3>
      <p>but the page you were looking for can't be found.</p>
    </>
  );
};

export default NotFound;

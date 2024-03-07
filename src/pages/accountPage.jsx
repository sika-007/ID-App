import { useEffect } from "react";
import PropTypes from "prop-types";

const AccountPage = ({ setSelectedPage }) => {
  useEffect(() => {
    setSelectedPage("account");
  }, []);

  return (
    <div>
      This is the page where users can access their account with migro lite.
      There will need to be some API calls being made on this page to be able to
      display our users data.
    </div>
  );
};

AccountPage.propTypes = {
  setSelectedPage: PropTypes.function,
};

export default AccountPage;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ selectedPage }) => {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          Migro Lite
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/account"
              className={`hover:text-gray-300 ${
                selectedPage === "account" && "text-secondary"
              }`}
            >
              Account
            </Link>
          </li>
          <li>
            <Link
              to="/passport"
              className={`hover:text-gray-300 ${
                selectedPage === "passport" && "text-secondary"
              }`}
            >
              Passport
            </Link>
          </li>
          <li>
            <Link
              to="/edit-info"
              className={`hover:text-gray-300 ${
                selectedPage === "edit-info" && "text-secondary"
              }`}
            >
              Edit Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  selectedPage: PropTypes.string,
};

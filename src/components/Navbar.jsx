import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          Migro Lite
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/account" className="hover:text-gray-300">
              Account
            </Link>
          </li>
          <li>
            <Link to="/passport" className="hover:text-gray-300">
              Passport
            </Link>
          </li>
          <li>
            <Link to="/edit-info" className="hover:text-gray-300">
              Edit Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

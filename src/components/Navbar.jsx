/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Navbar = ({cartItemsNo}) => {
  return (
    <nav className="w-full h-auto bg-primary">
      <ul className="flex justify-between items-center max-w-[130rem] mx-auto py-3 px-5 md:px-11">
        <li className=" text-secondary cursor-pointer">
          <Link to="/">
            <i className="fa-solid fa-mobile-screen text-2xl"></i>
          </Link>
        </li>
        <li className="text-white font-primary font-semibold text-lg hover:text-secondary duration-200 ease-linear">
          <Link to="/">Products</Link>
        </li>
        <li className="relative px-2 py-1 border-2 border-secondary rounded text-secondary cursor-pointer hover:bg-secondary hover:text-primary transition-colors ease-in-out duration-300">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <span className="bg-white rounded-full absolute top-[-10px] right-[-1rem] px-2 text-blue-500">
            {cartItemsNo}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

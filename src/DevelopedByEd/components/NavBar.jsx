import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa'
const NavBar = () => {
  return (
    <nav className="bg-slate-300 p-5 sticky top-0">
      <ul className="flex">
        <li>
          <Link className="text-xl px-16 transition-all flex items-center justify-center duration-150 hover:text-white" to="/">
          <FaHome /> &nbsp; Main Page
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

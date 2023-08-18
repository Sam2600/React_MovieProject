import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className="bg-slate-300 flex items-center justify-between p-5 sticky top-0">

      <Link
        className="flex justify-center items-center ps-16 transition-all duration-150 hover:text-white"
        to="/"
      >
        <FaHome /> &nbsp; <h1 className="text-xl">Main Page</h1>
      </Link>

      <ul className="flex pe-16 gap-5 text-lg">
        <li className="transition-all flex items-center justify-center duration-150 hover:text-white">
          <button>Popular</button>
        </li>
        <li className="transition-all flex items-center justify-center duration-150 hover:text-white">
          <button>Latest</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import { FaHome, FaHamburger } from "react-icons/fa";
import SearchInput from "./SearchInput";

const NavBar = ({collapsed, setCollapsed}) => {

  return (

    <nav className="bg-slate-300 flex items-center justify-between p-3">

      <div className="flex gap-5 items-center ps-5">

        <FaHamburger className="cursor-pointer hover:text-slate-50" onClick={() => setCollapsed(!collapsed)} />

        <Link
          className="flex justify-center items-center transition-all duration-150 hover:text-white"
          to="/"
        >
          <FaHome size={20} /> &nbsp; <p className="text-lg">Main Page</p>
        </Link>
      </div>

      <SearchInput />

      <ul className="flex gap-5 text-lg pe-5">
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

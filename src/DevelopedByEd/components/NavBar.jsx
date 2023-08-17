import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-slate-200 p-5">
      <ul className="flex">
        <li>
          <Link className="text-lg underline" to="/">
            Main Page
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

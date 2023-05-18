import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-400 font-medium text-base"
                  : "text-base text-gray-800"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-400 font-medium text-base"
                  : "text-base text-gray-800"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/allToys"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-400 font-medium text-base"
                  : " text-base text-gray-800"
              }
            >
              All Toys
            </NavLink>
            <NavLink
              to="/allToys"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-400 font-medium text-base"
                  : " text-base text-gray-800"
              }
            >
              My Toys
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="lg:navbar-start">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-sky-400 font-semibold text-xl"
                : "font-medium text-xl text-gray-800"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-sky-400 font-semibold text-xl"
                : "font-medium text-xl text-gray-800"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/allToys"
            className={({ isActive }) =>
              isActive
                ? "text-sky-400 font-semibold text-xl"
                : "font-medium text-xl text-gray-800"
            }
          >
            All Toys
          </NavLink>
          <NavLink
            to="/allToys"
            className={({ isActive }) =>
              isActive
                ? "text-sky-400 font-semibold text-xl"
                : "font-medium text-xl text-gray-800"
            }
          >
            My Toys
          </NavLink>
        </ul>
      </div>
      {/* right */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://picsum.photos/500/300?random" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

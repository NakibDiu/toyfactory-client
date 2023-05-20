import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "User logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-8 md:w-8"
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
            {user && (
              <NavLink
                to="/myToys"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-400 font-medium text-base"
                    : " text-base text-gray-800"
                }
              >
                My Toys
              </NavLink>
            )}
          </ul>
        </div>
        <Link to="/" className="hidden md:block lg:navbar-start">
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
          {user && (
            <NavLink
              to="/myToys"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-400 font-semibold text-xl"
                  : "font-medium text-xl text-gray-800"
              }
            >
              My Toys
            </NavLink>
          )}
        </ul>
      </div>
      {/* right */}
      <div className="navbar-end">
        {!user && !loading && (
          <div className="flex gap-4 px-6 items-center">
            <NavLink to="/login">
              <button className="btn btn-sm lg:btn-md btn-accent text-xs lg:text-sm">
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className="btn btn-sm lg:btn-md btn-success text-xs lg:text-sm">
                Sign up
              </button>
            </NavLink>
          </div>
        )}

        <div className="dropdown dropdown-end flex gap-3 items-center">
          {loading ? (
            <progress className="progress w-28"></progress>
          ) : user ? (
            <>
              <h4 className="text-base">
                Hi,{"   "}
                <span className="font-medium">
                  {user?.displayName || "Anonymous"}
                </span>
              </h4>
              <button
                className="btn btn-error btn-sm lg:btn-md text-white"
                onClick={handleLogOut}
              >
                Log out
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

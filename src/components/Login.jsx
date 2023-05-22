import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const { loginWithEmail, googleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          icon: "success",
          title: "Account created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignUp()
      .then((res) => {
        const newUser = res.user;
        console.log(newUser);
        Swal.fire({
          icon: "success",
          title: "User Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
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
    <div className="px-8 lg:px-16 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-semibold underline">Log In</h1>
      <div className="flex flex-col justify-center items-center gap-8 mb-16 mt-4">
        <form
          className="lg:basis-1/2 flex justify-center items-center flex-col bg-gradient-to-tr from-cyan-200 to-cyan-500 px-4 lg:px-8 py-2 lg:py-4 shadow-2xl shadow-green-300 rounded-xl"
          onSubmit={handleLogIn}
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-wide self-center my-4">
            Log In
          </button>
        </form>
        <p className="text-base ">
          Don&apos;t Have an account ?{"  "}
          <NavLink to="/signup" className="text-green-500 font-medium">
            Sign Up
          </NavLink>
        </p>
        <div className="flex flex-col items-center gap-4">
          <p className="uppercase text-lg font-semibold">or</p>
          <button
            className="btn btn-circle btn-success"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

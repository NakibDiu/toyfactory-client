import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  const [errors, setErrors] = useState({});
  const { signUpWithEmail, updateUser, googleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const errors = {};

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    signUpWithEmail(email, password)
      .then(() => {
        const updatedData = { displayName: name };
        updateUser(updatedData)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Account created successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
            navigate("/login");
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
          title: "Account created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
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
    <div className="px-8 lg:px-16">
      <h1 className="text-center text-4xl font-semibold underline">Sign Up</h1>
      <div className="flex flex-col justify-center items-center gap-8 mb-16 mt-4">
        <form
          className="lg:basis-1/2 flex justify-center items-center flex-col bg-gradient-to-tr from-green-200 to-green-500 px-4 lg:px-8 py-2 lg:py-4 shadow-2xl shadow-cyan-300 rounded-xl"
          onSubmit={handleSignup}
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              required
              name="name"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}{" "}
            {/* Display name error */}
          </div>
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
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}{" "}
            {/* Display email error */}
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
            {errors.password && (
              <span className="text-red-500">{errors.password}</span>
            )}{" "}
            {/* Display password error */}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered"
              required
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">{errors.confirmPassword}</span>
            )}{" "}
            {/* Display confirm password error */}
          </div>
          <input
            type="submit"
            className="btn btn-wide self-center my-4"
            value="Sign Up"
          />
        </form>
        <p className="text-base ">
          Already Have an account ?{" "}
          <NavLink to="/login" className="text-cyan-500 font-medium">
            Login
          </NavLink>
        </p>
        <div className="flex flex-col items-center gap-4">
          <p className="uppercase text-lg font-semibold">or</p>
          <button
            className="btn btn-circle btn-accent"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signup;

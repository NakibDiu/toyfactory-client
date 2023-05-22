import { NavLink } from "react-router-dom";
import UserToy from "./UserToy";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Mytoys = () => {
  const [userToys, setUserToys] = useState([]);
  const backendUrl = import.meta.env.VITE_backendUrl;
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`${backendUrl}/userToys?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserToys(data);
      });
  }, []);
  return (
    <div className="min-h-screen my-16">
      <h1 className="text-2xl lg:text-4xl text-center font-bold">My Toys</h1>
      <div className="mx-6 lg:mx-10 xl:mx-auto xl:max-w-[1200px]">
        {userToys.length < 1 ? (
          <>
            <div className="flex justify-center items-center flex-col min-h-screen space-y-6">
              <h3>No Toy added by your email</h3>
              <NavLink to="/addToy">
                <button className="btn btn-sm lg:btn-md">Add Toy</button>
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div className="my-8 ">
              {userToys?.map((toy) => {
                <UserToy key={toy._id} toy={toy} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mytoys;

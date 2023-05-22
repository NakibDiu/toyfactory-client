import { NavLink } from "react-router-dom";
import UserToy from "./UserToy";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Mytoys = () => {
  const [loading, setLoading] = useState(false);
  const [userToys, setUserToys] = useState([]);
  const backendUrl = import.meta.env.VITE_backendUrl;
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);
    fetch(`${backendUrl}/userToys?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserToys(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen my-16">
      {loading && (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-4xl font-semibold text-center">Loading....</h1>
        </div>
      )}
      <h1 className="text-2xl lg:text-4xl text-center font-bold">My Toys</h1>
      <div className="mx-6 lg:mx-10 xl:mx-auto xl:max-w-[900px]">
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
              <div className=" w-full flex flex-col justify-center gap-y-5">
                {userToys?.map((toy) => {
                  return <UserToy key={toy._id} toy={toy} />;
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mytoys;

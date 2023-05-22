import { NavLink } from "react-router-dom";
import UserToy from "./UserToy";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

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
        setUserToys(data);
        setLoading(false);
      });
  }, []);

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${backendUrl}/toy/delete/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = userToys.filter((toys) => toys._id !== id);
              setUserToys(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: error.message,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  const [selectedValue, setSelectedValue] = useState("");
  const handleFilter = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (selectedValue === "low-to-high") {
      setLoading(true);
      fetch(`${backendUrl}/toys/sort/desc?email=${user?.email}`)
        .then((response) => response.json())
        .then((data) => {
          setUserToys(data);
          setLoading(false);
        });
    } else if (selectedValue === "high-to-low") {
      setLoading(true);
      fetch(`${backendUrl}/toys/sort/asc?email=${user?.email}`)
        .then((response) => response.json())
        .then((data) => {
          setUserToys(data);
          setLoading(false);
        });
    }
  }, [selectedValue]);

  return (
    <div className="min-h-screen my-16">
      {loading && (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-4xl font-semibold text-center">Loading....</h1>
        </div>
      )}
      <div className="flex justify-between mx-6 lg:mx-10">
        <h1 className="text-2xl lg:text-4xl text-center font-bold">My Toys</h1>
        <select id="price-filter" onChange={handleFilter} className="outline outline-1 px-3">
          <option value="default">Filter</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
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
                  return (
                    <UserToy
                      key={toy._id}
                      toy={toy}
                      handleDeleteToy={handleDeleteToy}
                    />
                  );
                })}
              </div>
              <div className="w-full flex justify-center items-center my-5">
                <NavLink to="/addToy">
                  <button className="text-white font-medium rounded-lg bg-gradient-to-r from-red-500 to-orange-400 btn-sm lg:btn-md">
                    Add More
                  </button>
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mytoys;

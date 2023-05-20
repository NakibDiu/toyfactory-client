// import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";
import { useEffect, useState } from "react";

const Alltoys = () => {
  const [loading, setLoading] = useState(false);
  const [toys, setToys] = useState(null);

  const backendUrl = import.meta.env.VITE_backendUrl;
  // const backendUrl = "http://localhost:3000";


  useEffect(() => {
    const fetchToy = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${backendUrl}/toys`);
        const data = await response.json();
        setToys(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchToy();
  }, []);

  return (
    <div className="my-16 space-y-8">
      <h1 className="text-center text-2xl">All Toys</h1>
      {
        loading && (
          <div className="min-h-screen flex justify-center items-center">
            <h1 className="text-4xl font-semibold text-center">Loading....</h1>
          </div>
        )
      }
      <div className="mx-6 xl:max-w-[1200px] xl:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {toys?.map((toy) => (
          <Toy key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Alltoys;

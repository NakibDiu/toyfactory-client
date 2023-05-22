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
    };
    fetchToy();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filtered = [...toys].filter((toy) =>
      toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setToys(filtered);
    setSearchTerm("")
  };

  return (
    <div className="my-16 space-y-8">
      <h1 className="text-3xl lg:text-5xl font-bold text-center text-gray-600">
        All Toys
      </h1>
      <div className="flex justify-center items-center gap-6 mx-6">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="w-[75%] px-5 py-3 border-2 border-solid border-gray-300 rounded-2xl"
        />
        <button className="btn btn-secondary" onClick={handleSearch}>
          Search
        </button>
      </div>
      {loading && (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-4xl font-semibold text-center">Loading....</h1>
        </div>
      )}
      <div className="mx-6 xl:max-w-[1200px] xl:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {toys?.map((toy) => (
          <Toy key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Alltoys;

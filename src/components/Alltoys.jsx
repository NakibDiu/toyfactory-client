import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";

const Alltoys = () => {
  const initialToys = useLoaderData();
  return (
    <div className="my-16 space-y-8">
      <h1 className="text-center text-2xl">All Toys</h1>
      <div className="mx-6 xl:max-w-[1200px] xl:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {initialToys?.map((toy) => (
          <Toy key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Alltoys;

import { useLoaderData } from "react-router-dom";

const ToyModal = () => {
  const toy = useLoaderData()

  const {
    toyName,
    sellerName,
    sellerEmail,
    rating,
    price,
    picture,
    description,
    category,
  } = toy;

  return (
    <div className="hero min-h-screen px-10 shadow-2xl">
      <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-12">
        <img
          src={picture}
          alt={toyName}
          className="w-full min-h-[150px] lg:min-h-[250px] rounded-lg shadow-xl bg-gray-100"
        />
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold">{toyName}</h1>
          <div className="badge badge-outline mt-2">{category}</div>
          <p className="py-4">{description}</p>
          <div className="flex justify-between gap-8">
            <div className="my-4">
              <p className="text-base">
                By: <span className="font-bold">{sellerName}</span>{" "}
              </p>
              <p className="text-base">
                Email: <span className="font-bold">{sellerEmail}</span>{" "}
              </p>
            </div>
            <div className="my-4">
              <p className="text-base ">
                Rating: <span className="font-bold">{rating}</span>{" "}
              </p>
              <p className="text-base">
                Price: <span className="font-bold">{price + " "}$</span>{" "}
              </p>
            </div>
          </div>
          <button className="btn btn-md btn-success text-white mt-6">
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyModal;

import { FcRating } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const UserToy = ({ toy, handleDeleteToy }) => {
  const { _id, category, picture, price, rating, toyName } = toy;

  return (
    <div className="w-full p-4 border-2 border-solid rounded-3xl flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 lg:gap-4 xl:gap-5 shadow-lg lg:shadow-xl">
      <div>
        <img
          src={picture || "https://picsum.photos/200/300"}
          alt={toyName}
          className="w-[60px] rounded-xl bg-gray-400"
        />
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-base font-medium text-center">{toyName}</h2>
        <p>{category}</p>
      </div>
      <p className="py-2 text-base lg:text-lg font-semibold">{price + "  $"}</p>
      <p className="py-2 text-base lg:text-lg font-semibold flex items-center gap-1">
        {rating + " "} <FcRating />
      </p>
      <NavLink to={`/update/${_id}`}>
        <button className="btn btn-sm btn-info">Update</button>
      </NavLink>

      <button
        className="btn btn-sm btn-error"
        onClick={() => handleDeleteToy(_id)}
      >
        Delete
      </button>
    </div>
  );
};

export default UserToy;

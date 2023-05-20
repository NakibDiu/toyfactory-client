const Toy = ({ toy }) => {
  console.log(toy);
  const {
    _id,
    toyName,
    sellerName,
    sellerEmail,
    rating,
    price,
    picture,
    description,
    category,
    availableQuantity,
  } = toy;
  return (
    <div className="card card-compact shadow-xl relative rounded-xl">
      <div className="absolute w-12 h-12 -top-5 -right-3 p-3 bg-red-600 rounded-full text-white font-bold text-center flex justify-center items-center text-lg">
        {rating}
      </div>
      <figure>
        <img
          src={picture || "https://picsum.photos/200/300"}
          alt={toyName}
          className="w-full min-h-[200px] bg-gray-300 rounded-t-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>{description.substring(0, 120)}...</p>
        <div className="my-2 space-y-2">
          <h3>
            By <span className="text-base font-medium">{sellerName}</span>
          </h3>
          <div className="badge badge-outline">{category}</div>
        </div>
        <h2 className="text-lg font-bold">{price + "  "}$</h2>
        <div className="card-actions justify-end">
          {/* modal */}
          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="btn btn-sm lg:btn-md ">
            Get
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <h3 className="text-lg font-bold">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Toy;

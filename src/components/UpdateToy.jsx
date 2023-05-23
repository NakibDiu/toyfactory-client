import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const fetcedToyData = useLoaderData();
  const navigate = useNavigate();

  const {
    toyName,
    rating,
    price,
    picture,
    description,
    category,
    _id,
    availableQuantity,
  } = fetcedToyData;

  const categories = [
    "Avengers",
    "Spider-Man",
    "X-Men",
    "Black Panther",
    "Doctor Strange",
    "Guardians of the Galaxy",
    "Captain Marvel",
    "Ant-Man",
  ];

  const [selectedCategory, setSelectedCategory] = useState(category);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    console.log("Selected category:", selectedCategory);
  };

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const picture = form.picture.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    const category = selectedCategory;

    const newToy = {
      toyName,
      picture,
      description,
      category,
      price,
      availableQuantity,
      rating,
      sellerEmail,
      sellerName,
    };

    console.log(newToy);

    const backendUrl = import.meta.env.VITE_backendUrl;
    // const backendUrl = "http://localhost:3000";

    fetch(`${backendUrl}/toys/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          Swal.fire({
            icon: "success",
            title: "Toys updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myToys")
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: {err},
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen my-8 lg:my-16 space-y-8">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center">
        Update Toy
      </h1>
      <div className="xl:max-w-[900px] xl:mx-auto mx-6 lg:mx-10">
        <form
          className="bg-gradient-to-tr from-blue-700 to-white w-full p-3 lg:p-5 rounded-xl space-y-4"
          onSubmit={handleUpdateToy}
        >
          <div>
            <label
              htmlFor="toyName"
              className="block mb-2 text-white font-semibold"
            >
              Toy Name:
            </label>
            <input
              type="text"
              id="toyName"
              name="toyName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              defaultValue={toyName}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-white font-semibold"
            >
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              defaultValue={description}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-white font-semibold"
            >
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              id="category"
              name="category"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="picture"
              className="block mb-2 text-white font-semibold"
            >
              Picture URL:
            </label>
            <input
              type="url"
              id="picture"
              name="picture"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              defaultValue={picture}
            />
          </div>
          <div>
            <label
              htmlFor="sellerName"
              className="block mb-2 text-white font-semibold"
            >
              Seller Name:
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              defaultValue={user?.displayName}
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="sellerEmail"
              className="block mb-2 text-white font-semibold"
            >
              Seller Email:
            </label>
            <input
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              defaultValue={user?.email}
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-white font-semibold"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              defaultValue={price}
            />
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block mb-2 text-white font-semibold"
            >
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              step="0.1"
              min="0"
              max="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              defaultValue={rating}
            />
          </div>
          <div>
            <label
              htmlFor="availableQuantity"
              className="block mb-2 text-white font-semibold"
            >
              Available Quantity:
            </label>
            <input
              type="number"
              id="availableQuantity"
              name="availableQuantity"
              min="0"
              step="1"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              defaultValue={availableQuantity}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white font-medium rounded hover:bg-gray-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;

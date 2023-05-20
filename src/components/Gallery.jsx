import thor1 from "../assets/gallery/thor-1.jpg";
import thor2 from "../assets/gallery/thor-2.jpg";
import ironman1 from "../assets/gallery/ironman-single.jpg";
import ironman2 from "../assets/gallery/ironman-single-2.jpg";
import ca from "../assets/gallery/ca-1.jpg";
import ca2 from "../assets/gallery/ca-2.jpg";
import spider1 from "../assets/gallery/spider-1.jpeg";
import spider2 from "../assets/gallery/spider-2.jpeg";
import { NavLink, useNavigate } from "react-router-dom";

const images = [
  {
    id: 1,
    img: thor1,
    title: "Thor: with the silver axe",
  },
  {
    id: 2,
    img: thor2,
    title: "Thor: from the avengers infinity war",
  },
  {
    id: 3,
    img: ironman1,
    title: "The Ironman stand alone to rescue the situation",
  },
  {
    id: 4,
    img: ironman2,
    title: "The Ironman stand alone to rescue the situation",
  },
  {
    id: 5,
    img: ca,
    title: "Captain America leads the group with his shield",
  },
  {
    id: 6,
    img: ca2,
    title: "The Iron Shield is giving better protection",
  },
  {
    id: 7,
    img: spider1,
    title: "Spiderman  is ready to rock and roll",
  },
  {
    id: 8,
    img: spider2,
    title: "Spiderman is ready to serve to the humanitarian",
  },
];

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-10 px-6 lg:px-10">
      <h1 className="text-3xl lg:text-5xl font-bold text-center text-gray-600">
        Heroes Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images?.map((img) => (
          <div
            key={img.id}
            className="rounded-lg overflow-hidden border border-gray-300 shadow-lg relative transform hover:scale-105 transition-transform duration-300 p-3 cursor-pointer"
          >
            <img
              src={img.img}
              alt="image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col gap-4 items-center justify-center px-4 pb-5">
                <p className="text-white text-xl text-center font-semibold">
                  {img.title}
                </p>
                <NavLink to="/allToys">
                  <button
                    className="btn btn-info btn-sm text-white"
                    onClick={navigate("/allToys")}
                  >
                    See More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

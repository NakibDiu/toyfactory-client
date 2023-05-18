import ironman from "../assets/banner/iron-man.jpg";
import ironman2 from "../assets/banner/iron-man-2.jpg";
import spiderman from "../assets/banner/spider.jpeg";
import hulk from "../assets/banner/hulk.jpeg";
import all from "../assets/banner/all.jpg";

const Hero = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full max-h-screen">
        <img src={all} className="w-full" />
        <div
          className="absolute top-0
    left-0 h-full w-full bg-gray-700 bg-opacity-25 flex justify-center items-center flex-col gap-y-5"
        >
          <h3 className="text-white text-5xl lg:text-7xl font-extrabold text-center">
            Get Your Marvel <br />
            <span className="text-yellow-500">Heroes</span>
          </h3>
          <button className="btn btn-outline btn-accent">Shop Now</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full max-h-screen">
        <img src={ironman2} className="w-full" />
        <div
          className="absolute top-0
    left-0 h-full w-full bg-gray-700 bg-opacity-25 flex justify-center items-center flex-col gap-y-5"
        >
          <h3 className="text-white text-5xl lg:text-7xl font-extrabold text-center">
            Get Your Marvel <br />{" "}
            <span className="text-yellow-500">Heroes</span>
          </h3>
          <button className="btn btn-outline btn-accent">Shop Now</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full max-h-screen">
        <img src={spiderman} className="w-full" />
        <div
          className="absolute top-0
    left-0 h-full w-full bg-gray-700 bg-opacity-25 flex justify-center items-center flex-col gap-y-5"
        >
          <h3 className="text-white text-5xl font-extrabold text-center lg:text-7xl">
            Get Your Marvel <br />
            <span className="text-yellow-500">Heroes</span>
          </h3>
          <button className="btn btn-outline btn-accent">Shop Now</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full max-h-screen">
        <img src={hulk} className="w-full" />
        <div
          className="absolute top-0
    left-0 h-full w-full bg-gray-700 bg-opacity-25 flex justify-center items-center flex-col gap-y-5"
        >
          <h3 className="text-white text-5xl font-extrabold text-center lg:text-7xl">
            Get Your Marvel <br />
            <span className="text-yellow-500">Heroes</span>
          </h3>
          <button className="btn btn-outline btn-accent">Shop Now</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full max-h-screen">
        <img src={ironman} className="w-full" />
        <div
          className="absolute top-0
    left-0 h-full w-full bg-gray-700 bg-opacity-25 flex justify-center items-center flex-col gap-y-5"
        >
          <h3 className="text-white text-5xl font-extrabold text-center lg:text-7xl">
            Get Your Marvel <br />
            <span className="text-yellow-500">Heroes</span>
          </h3>
          <button className="btn btn-outline btn-accent">Shop Now</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

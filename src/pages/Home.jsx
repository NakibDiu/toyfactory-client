import { useEffect } from "react";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Shop from "../components/Shop";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="space-y-24 mb-16">
      <Hero />
      <Gallery />
      <Shop />
    </div>
  );
};

export default Home;

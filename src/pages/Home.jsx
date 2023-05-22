import { useEffect } from "react";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Shop from "../components/Shop";
import Testimonials from "../components/Testimonials";

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
      <Testimonials />
    </div>
  );
};

export default Home;

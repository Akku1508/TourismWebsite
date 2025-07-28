import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Navbar from "../components/Navbar";
import Homeque from "../components/Homeque";
import Footer from "../components/Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="relative bg-white">
        {/* Responsive background image */}
        <img
          src="../src/assets/home-bg-image.jpg"
          className="w-full h-[50vh] sm:h-[70vh] md:h-[100vh] opacity-70 object-cover"
          alt="Travel background"
        />

        {/* Content overlay - adjusted positioning */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-center mt-[50px] mb-[10px] sm:mb-12 md:mb-16 ">
            <span className="block text-[1rem] sm:text-[2rem] md:text-[3rem]">Welcome</span>
            <span className="block text-[1rem] sm:text-[1.5rem] md:text-[2rem]">to</span>
            <h1 className="text-[1.5rem] sm:text-[3rem] md:text-[5rem] ">
              <span id="namaste">NAMASTE</span>
              <span id="yatri"> Yatri.com</span>
            </h1>
          </div>

          <div className="flex gap-4 sm:gap-8 md:gap-12 flex-col sm:flex-row">
            <Link to="/explore">
              <button className="text-[0.5rem] w-[4rem] h-[30px] sm:text-[1rem] w-[5rem] h-[40px] md:text-[1.1rem] w-[8rem] sm:w-[10rem] h-[2.5rem] sm:h-[2.9rem] rounded-xl bg-black text-white hover:bg-gray-800 hover:scale-105 hover:text-[#d0a933] transition duration-300 ease-in-out shadow-md">
                Explore
              </button>
            </Link>
            <Link to="/places">
              <button className="text-[0.5rem] w-[4rem] h-[30px] sm:text-[1rem] w-[5rem] h-[40px] md:text-[1.1rem] w-[8rem] sm:w-[10rem] h-[2.5rem] sm:h-[2.9rem] rounded-xl bg-black text-white hover:bg-gray-800 hover:scale-105 hover:text-[#d0a933] transition duration-300 ease-in-out shadow-md">
                Places
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full pb-4 bg-[#d0a933] mb-[3rem]">
        <Homeque isCompact={true} />
        <div className="text-center mt-0">
          <Link to="/places">
            <button className="h-[50px] mt-[2rem] px-6 py-0 bg-black text-white rounded-lg hover:bg-gray-800 hover:scale-105 hover:text-[#d0a933] transition duration-300 ease-in-out shadow-md">
              View All Destinations
            </button>
          </Link>
        </div>
      </section>

      {/* <section className="w-full flex flex-col items-center text-black font-semibold text-lg">
        <AboutUs />
      </section> */}

      {/* <footer className="bg-black py-5 text-center text-white w-full">
        <p>&copy; 2025 Namaste Yatri. All rights reserved.</p>
        <p>Contact Us:+91-XXXXXXXXX</p>
      </footer> */}
      <Footer/>

    </div>
  );
};

export default Home;
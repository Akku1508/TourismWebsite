import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowUp } from 'react-icons/fa';
import Data from "../../Data/Data.json";
import Pagination from "./Pagination";
import Footer from "./Footer";

const Homeque = ({ isCompact = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [pageSum, setPageSum] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const location = useLocation();

  // Determine if we're in compact view based on route or prop
  const compactView = isCompact !== undefined ? isCompact : location.pathname === '/';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showdetail = (index) => {
    // console.log(index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initialize data based on view mode
  useEffect(() => {
    if (compactView) {
      // For home page, show first 3 items
      setCurrentData(Data.destinations.slice(0, 3));
    } else {
      // For places page, initialize with first page of paginated data
      setCurrentData(Data.destinations.slice(0, 9));
    }
  }, [compactView]);

  return (
    <div className="w-full mt-[120px] mx-auto   bg-[#d0a933]">
      {compactView && (
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
      )}
      
      <section className={`grid ${compactView ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-6 justify-center px-[4rem]`}>
        {currentData.map((destination, i) => (
          <article
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-6 pt-32 w-full bg-gray-900/40 shadow-md transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]"
            key={pageSum + i}
          >
            <img
              src={destination.image[currentImageIndex]}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-in-out"
              alt={destination.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            
            <div className="z-10 space-y-2">
              <h3 className="text-2xl font-bold text-white text-center cursor-default">
                {destination.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 text-center cursor-default line-clamp-2">
                {destination.description}
              </p>
            </div>

            <div className="z-10 mt-6 flex justify-center">
              <Link to={`/detail/?id=${pageSum + i}`} key={pageSum + i}>
                <button
                  onClick={() => showdetail(pageSum + i)}
                  className="w-24 h-8 border-2 rounded-lg text-white backdrop-blur cursor-pointer duration-300 hover:bg-[#f9a826] hover:text-[#1f2937] hover:shadow-md text-sm"
                >
                  Explore
                </button>
              </Link>
            </div>
          </article>
        ))}
      </section>
      

      {showScrollButton && (
        <button
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg  bg-white text-[#d0a933] hover:bg-black text-white transition duration-300 hover:scale-110"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} />
        </button>
      )}

      {!compactView && (
        <div className="mt-8">
          <Pagination setCurrentData={setCurrentData} setPageSum={setPageSum} />
          
        </div>
                
        
      )}
      {/* Add Footer when not in compact view */}
      {!compactView && <Footer/>}
      
    </div>
  );
};

export default Homeque;
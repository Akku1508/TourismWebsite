import React, { useEffect, useState } from "react";
import Details from "./Details";
import Detailed from "../../Data/Detailed.json";
import Footer from "./Footer";

const DetailView = () => {
  const [data, setData] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    if (id !== null) {
      setData(Detailed.destinations[parseInt(id, 10)]);
    }
  }, []);

  const toggleCardExpand = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  if (!data) return <div className="min-h-screen bg-gray-50"></div>;

  return (
    <div className="mt-[100px] bg-[#d0a933]">
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          {/* Hero Image Section */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[700px]">
            <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 sm:p-8">
              <div className="transform transition-transform duration-300 hover:translate-y-1">
                <div className="flex items-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    {data.name}
                  </h1>
                  <span className="ml-3 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/30 hover:bg-white/30 transition-colors">
                    {data.category}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white text-sm sm:text-base">
                    {data.rating || "4.8"} ({(data.reviews || "1.2k")} reviews)
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl text-white mt-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {data.location}
                </h3>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Key Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {/* Category Card */}
              <div 
                className={`bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-xl border border-indigo-100 transition-all duration-300 ${expandedCard === 'category' ? 'shadow-lg scale-[1.02]' : 'shadow-md hover:shadow-lg'}`}
                onClick={() => toggleCardExpand('category')}
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-3 transition-colors duration-300 group-hover:bg-indigo-200">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Category</h2>
                </div>
                <p className="text-gray-700 pl-11 font-medium">{data.category}</p>
                {expandedCard === 'category' && (
                  <p className="mt-3 text-gray-600 text-sm pl-11">
                    This destination is perfect for {data.category.toLowerCase()} experiences and adventures.
                  </p>
                )}
              </div>

              {/* Best Time Card */}
              <div 
                className={`bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-100 transition-all duration-300 ${expandedCard === 'bestTime' ? 'shadow-lg scale-[1.02]' : 'shadow-md hover:shadow-lg'}`}
                onClick={() => toggleCardExpand('bestTime')}
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3 transition-colors duration-300 group-hover:bg-blue-200">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Best Time</h2>
                </div>
                <p className="text-gray-700 pl-11 font-medium">{data.bestTimeToVisit}</p>
                {expandedCard === 'bestTime' && (
                  <p className="mt-3 text-gray-600 text-sm pl-11">
                    The ideal months offer perfect weather conditions and fewer crowds.
                  </p>
                )}
              </div>
            </div>

            {/* Attractions Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Must-Visit Attractions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.nearbyAttractions.map((attraction, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center transition-all duration-500 group-hover:opacity-90">
                        <span className="text-white text-xl font-bold transition-transform duration-300 group-hover:scale-110">
                          {attraction.split(',')[0]}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 bg-white">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                        {attraction}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {index % 2 === 0 
                          ? "A breathtaking spot with stunning views and rich history."
                          : "Popular destination known for its cultural significance."}
                      </p>
                      <div className="mt-3 flex items-center text-sm text-purple-600 group-hover:text-purple-800 transition-colors">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {index % 3 === 0 ? "30 mins away" : index % 3 === 1 ? "1 hour away" : "15 mins away"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Popular Activities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.popularActivities.map((activity, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-lg mr-3 transition-colors duration-300 ${index % 4 === 0 ? 'bg-blue-100 group-hover:bg-blue-200' : index % 4 === 1 ? 'bg-green-100 group-hover:bg-green-200' : index % 4 === 2 ? 'bg-yellow-100 group-hover:bg-yellow-200' : 'bg-purple-100 group-hover:bg-purple-200'}`}>
                        <svg className={`w-5 h-5 ${index % 4 === 0 ? 'text-blue-600' : index % 4 === 1 ? 'text-green-600' : index % 4 === 2 ? 'text-yellow-600' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                          {activity}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1 group-hover:text-gray-600 transition-colors">
                          {index % 3 === 0 ? "Great for all ages" : index % 3 === 1 ? "Adventure activity" : "Cultural experience"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Details />
      </section>
      <Footer/>
    </div>
  );
};

export default DetailView;
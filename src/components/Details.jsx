import React from "react";
import { Link } from "react-router-dom";
import Detailed from "../../Data/Detailed.json";

const Details = () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const isValidId = id !== null && id >= 0 && id < Detailed.destinations.length;
  const destination = isValidId ? Detailed.destinations[id] : null;

  if (!destination) return null;

  const { happeningEvents, travelTips, famousFood, localTransport = [], culturalNotes = [] } = destination;

  return (
    <div className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Events Section */}
      {happeningEvents.length > 0 && (
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Happening Events
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto transition-all duration-500 hover:w-24"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {happeningEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={event.image}
                    alt={event.eventName}
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-white text-sm font-medium bg-indigo-600 px-3 py-1 rounded-full hover:bg-indigo-700 transition-colors">
                      {event.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {event.eventName}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <Link
                    to={event.exploreLink}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                    Explore More
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Information Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Travel Tips Card */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md overflow-hidden border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-lg mr-4 transition-colors duration-300 hover:bg-blue-700">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">Travel Tips</h2>
            </div>
            <ul className="space-y-3">
              {travelTips.map((tip, index) => (
                <li key={index} className="flex items-start hover:translate-x-1 transition-transform">
                  <span className="flex-shrink-0 bg-blue-200 text-blue-800 rounded-full p-1 mr-3 mt-1 transition-colors duration-300 hover:bg-blue-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 hover:text-gray-900 transition-colors">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Famous Food Card */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-md overflow-hidden border border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 p-3 rounded-lg mr-4 transition-colors duration-300 hover:bg-orange-700">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 hover:text-orange-600 transition-colors">Must-Try Foods</h2>
            </div>
            <ul className="space-y-3">
              {famousFood.map((food, index) => (
                <li key={index} className="flex items-start hover:translate-x-1 transition-transform">
                  <span className="flex-shrink-0 bg-orange-200 text-orange-800 rounded-full p-1 mr-3 mt-1 transition-colors duration-300 hover:bg-orange-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 hover:text-gray-900 transition-colors">{food}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Local Transport Card */}
        {localTransport.length > 0 && (
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-lg mr-4 transition-colors duration-300 hover:bg-green-700">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors">Local Transport</h2>
              </div>
              <ul className="space-y-3">
                {localTransport.map((transport, index) => (
                  <li key={index} className="flex items-start hover:translate-x-1 transition-transform">
                    <span className="flex-shrink-0 bg-green-200 text-green-800 rounded-full p-1 mr-3 mt-1 transition-colors duration-300 hover:bg-green-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 hover:text-gray-900 transition-colors">{transport}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Cultural Notes Card */}
        {culturalNotes.length > 0 && (
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md overflow-hidden border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 p-3 rounded-lg mr-4 transition-colors duration-300 hover:bg-purple-700">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors">Cultural Notes</h2>
              </div>
              <ul className="space-y-3">
                {culturalNotes.map((note, index) => (
                  <li key={index} className="flex items-start hover:translate-x-1 transition-transform">
                    <span className="flex-shrink-0 bg-purple-200 text-purple-800 rounded-full p-1 mr-3 mt-1 transition-colors duration-300 hover:bg-purple-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 hover:text-gray-900 transition-colors">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
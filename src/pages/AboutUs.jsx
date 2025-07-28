import React, { useState } from 'react';
import '../styles/aboutus.css';
import Footer from '../components/Footer';

const AboutUs = () => {
    const [exploreHover, setExploreHover] = useState(false);
    const [activityHover, setActivityHover] = useState(false);
    const [eventHover, setEventHover] = useState(false);
    const [seasonHover, setSeasonHover] = useState(false);

    return (
        <div>

        <div id='about-us' className="about-us-container">
            <h1 className='about-us-heading'>About Namaste yatri.com</h1>
            <p className="about-us-subheading">Your gateway to exploring India's rich cultural heritage and breathtaking landscapes</p>

            <div className='about-us-blocks-container'>
                <div className='about-us-block'>
                    <div
                        className={`about-us-card ${exploreHover ? 'hovered' : ''}`}
                        onMouseOver={() => setExploreHover(true)}
                        onMouseLeave={() => setExploreHover(false)}
                    >
                        <div className="card-header">
                            <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {exploreHover ? (
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#4F46E5" />
                                ) : (
                                    <>
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="#4F46E5" strokeWidth="1.5" fill="none" />
                                    </>
                                )}
                            </svg>
                            <h3 className='card-title'>Discover India</h3>
                        </div>
                        <p className='card-content'>
                            If you're looking for popular tourist spots or hidden gems, NamasteYatri.com offers a curated list of places that cater to all interests. With the ability to search and filter destinations, you can easily plan your travel and ensure you experience the rich cultural, magnificent architecture and natural tapestry that India has to offer.
                        </p>
                    </div>

                    <div
                        className={`about-us-card ${activityHover ? 'hovered' : ''}`}
                        onMouseOver={() => setActivityHover(true)}
                        onMouseLeave={() => setActivityHover(false)}
                    >
                        <div className="card-header">
                            <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {activityHover ? (
                                    <path d="M17.73 12.01l3.98-3.98a.996.996 0 0 0 0-1.41l-4.34-4.34a.996.996 0 0 0-1.41 0l-3.98 3.98L8 2.29a1.001 1.001 0 0 0-1.41 0L2.25 6.63a.996.996 0 0 0 0 1.41l3.98 3.98L2.25 16a.996.996 0 0 0 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29s.51-.1.71-.29l4.34-4.34a.996.996 0 0 0 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z" fill="#4F46E5" />
                                ) : (
                                    <path d="M17.73 12.01l3.98-3.98a.996.996 0 0 0 0-1.41l-4.34-4.34a.996.996 0 0 0-1.41 0l-3.98 3.98L8 2.29a1.001 1.001 0 0 0-1.41 0L2.25 6.63a.996.996 0 0 0 0 1.41l3.98 3.98L2.25 16a.996.996 0 0 0 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29s.51-.1.71-.29l4.34-4.34a.996.996 0 0 0 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z" stroke="#4F46E5" strokeWidth="0.5" fill="none" />
                                )}
                            </svg>
                            <h3 className='card-title'>Activity Highlights</h3>
                        </div>
                        <p className='card-content'>
                            Whether you're into trekking in the Himalayas, diving in the Andaman Islands, or practicing yoga in Rishikesh, NamasteYatri.com provides detailed information on the best activities to try. You can discover new adventures, learn about local traditions, and find relaxation spots, all tailored to enhance your travel experiences.
                        </p>
                    </div>
                </div>

                <div className='about-us-block'>
                    <div
                        className={`about-us-card ${eventHover ? 'hovered' : ''}`}
                        onMouseOver={() => setEventHover(true)}
                        onMouseLeave={() => setEventHover(false)}
                    >
                        <div className="card-header">
                            <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {eventHover ? (
                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z" fill="#4F46E5" />
                                ) : (
                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z" stroke="#4F46E5" strokeWidth="0.5" fill="none" />
                                )}
                            </svg>
                            <h3 className='card-title'>Major Events</h3>
                        </div>
                        <p className='card-content'>
                            From vibrant festivals like Diwali and Holi to cultural exhibitions, music concerts, and local fairs, we ensure that travelers don't miss out on unique experiences. By participating in these events, you can immerse themselves in local culture, witness traditional celebrations, and create unforgettable memories during your journey.
                        </p>
                    </div>

                    <div
                        className={`about-us-card ${seasonHover ? 'hovered' : ''}`}
                        onMouseOver={() => setSeasonHover(true)}
                        onMouseLeave={() => setSeasonHover(false)}
                    >
                        <div className="card-header">
                            <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {seasonHover ? (
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" fill="#4F46E5" />
                                ) : (
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" stroke="#4F46E5" strokeWidth="0.5" fill="none" />
                                )}
                            </svg>
                            <h3 className='card-title'>Ideal Season</h3>
                        </div>
                        <p className='card-content'>
                            Detailed timelines suggest the perfect months to visit each place, factoring in climate conditions and peak tourist seasons. Additionally, it informs you about specific events and festivals occurring throughout the year, allowing you to plan your trips to coincide with these vibrant celebrations, enhancing your overall travel experience.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-us-mission">
                <svg className="mission-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="50" r="30" stroke="#4F46E5" strokeWidth="2" fill="none" />
                    <path d="M100,20 L105,35 L95,35 Z" fill="#4F46E5" /> {/* N */}
                    <path d="M180,50 L165,55 L165,45 Z" fill="#4F46E5" /> {/* E */}
                    <path d="M100,80 L95,65 L105,65 Z" fill="#4F46E5" /> {/* S */}
                    <path d="M20,50 L35,45 L35,55 Z" fill="#4F46E5" /> {/* W */}
                    <circle cx="100" cy="50" r="5" fill="#4F46E5" />
                </svg>
                <h2>Our Mission</h2>
                <p>
                    At NamasteYatri.com, we're dedicated to showcasing India's incredible diversity through authentic travel experiences.
                    We combine local expertise with innovative technology to help travelers discover the heart and soul of India.
                </p>

            </div>
           

          </div>
                          <Footer />

        </div>
    );
}

export default AboutUs;
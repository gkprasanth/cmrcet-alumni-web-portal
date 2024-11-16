import React from "react";
import { Link } from "react-router-dom";
import { eventsData, jobsData, newsData } from "../utils/data";
import { FaArrowRight } from "react-icons/fa";
import home1 from "../assets/home1.jpeg";
import home2 from "../assets/home2.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

const HomePage = () => {
  return (
    <>
      {/* Hero Carousel */}
      <div className="my">
        <Carousel 
          infiniteLoop 
          autoPlay 
          showThumbs={false} 
          showStatus={false} 
          className="w-full h-[500px]"
        >
          {[home1, home2, home2].map((image, index) => (
            <div key={index} className="w-full h-[500px]">
              <img
                src={image}
                alt={`Carousel image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* News Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">News Room</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={news.image || "https://via.placeholder.com/150"}
                  alt={news.title || "News Image"}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{news.title}</h3>
                  <p className="text-gray-600 mt-2">
                    {news.description?.substring(0, 100)}...
                  </p>
                  <Link
                    to={news.link}
                    className="text-blue-500 hover:underline mt-2 inline-flex items-center"
                    aria-label={`Read more about ${news.title}`}
                  >
                    Read More <FaArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/news"
            className="inline-block mt-6 text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View All News
          </Link>
        </div>

        {/* Events Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={event.image || "https://via.placeholder.com/150"}
                  alt={event.title || "Event Image"}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                  <Link
                    to={event.link}
                    className="text-blue-500 hover:underline mt-2 inline-flex items-center"
                    aria-label={`View details for ${event.title}`}
                  >
                    View Event <FaArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/events"
            className="inline-block mt-6 text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            See More Events
          </Link>
        </div>

        {/* Jobs Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Jobs & Internships</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {jobsData.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600 mt-2">{job.description}</p>
                  <Link
                    to={job.link}
                    className="text-blue-500 hover:underline mt-2 inline-flex items-center"
                    aria-label={`Apply for ${job.title}`}
                  >
                    Apply Now <FaArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/jobs"
            className="inline-block mt-6 text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View All Jobs
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;

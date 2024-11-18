import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import home1 from "../assets/home1.jpeg";
import home2 from "../assets/home2.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import { databases } from "../utils/appwrite";
import { Query } from "appwrite";

const HomePage = () => {
  const [newsData, setNewsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [isLoadingNews, setIsLoadingNews] = useState(true);
  const [isLoadingEvents, setIsLoadingEvents] = useState(true);

  // Fetch news data
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await databases.listDocuments(
          "6739a7360014e787cfad",
          "6739a74200018257a9fb",
          [Query.orderDesc("$createdAt"), Query.limit(3)]
        );
        setNewsData(response.documents);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoadingNews(false);
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await databases.listDocuments(
          "6739a7360014e787cfad",
          "673ad9620001dd25a7f5",
          [Query.orderDesc("$createdAt"), Query.limit(3)]
        );
        setEventsData(response.documents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoadingEvents(false);
      }
    };

    fetchNews();
    fetchEvents();
  }, []);

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="bg-gray-200 animate-pulse shadow-md rounded-lg overflow-hidden">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
      </div>
    </div>
  );

  return (
    <>
      {/* Carousel Section */}
      <div className="my">
        <Carousel
          infiniteLoop
          autoPlay
          showThumbs={false}
          showStatus={false}
          stopOnHover={false}
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
            {isLoadingNews
              ? Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : newsData.map((news) => (
                  <div
                    key={news.$id}
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
                        to={`/news/${news.$id}`}
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
            {isLoadingEvents
              ? Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : eventsData.map((event) => (
                  <div
                    key={event.$id}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <img
                      src={event.image || "https://via.placeholder.com/150"}
                      alt={event.title || "Event Image"}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <p className="text-gray-600 mt-2 line-clamp-2">
                        {event.description}
                      </p>
                      <Link
                        to={`/events/${event.id}`}
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
      </div>
    </>
  );
};

export default HomePage;

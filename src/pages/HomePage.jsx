import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import home1 from "../assets/home1.jpeg";
import home2 from "../assets/home2.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import { databases } from "../utils/appwrite";
import { Query } from "appwrite";
import { jobsData } from "./JobsPage";


const galleryImages = [
  "https://media.licdn.com/dms/image/v2/D4D1BAQFj_ZcvIT0pag/company-background_10000/company-background_10000/0/1657040178535/cmrcetofficial_cover?e=2147483647&v=beta&t=AeOQaUzRTZTMm1vD38daOFnrum890xIIUUlojaN6JNk",
  "https://pbs.twimg.com/media/EEBR7DvU0AEW6Xa.jpg",
  "https://i.ytimg.com/vi/ivEfMWIQGuU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDATIv_NwI9p_4OrVQarvYNIz3l2w",
  "https://images.shiksha.com/mediadata/images/1547212205phpW9TLlK.jpeg",
  "https://pbs.twimg.com/media/EP8OJfdX0AAKcxi.jpg",
  "https://media.licdn.com/dms/image/v2/C4D22AQEqyWa6udcGBg/feedshare-shrink_800/feedshare-shrink_800/0/1652538566284?e=2147483647&v=beta&t=iRAf9_v_760i9AZ15DF6PsRwygWoF-bcpBQthj2f4xk",
  "https://images.shiksha.com/mediadata/images/1547212073phpKzuE58.jpeg",
  "https://images.shiksha.com/mediadata/images/1547212463phpcoivol.jpeg",
  "https://media.licdn.com/dms/image/v2/D4E22AQF1yqDpqkz7GQ/feedshare-shrink_800/feedshare-shrink_800/0/1696863048441?e=2147483647&v=beta&t=XIAkRWAczl7Kv4awDQsNtBBQvo7RtsvgB17jRU_jSvM"

];




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



    const fetchJobs = async () => {
      const url = 'https://job-posting-feed-api.p.rapidapi.com/active-ats-meili?title_search=false&description_type=html';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '74e08c8d1dmshc3c3b3d2a461171p1baf7fjsnd8f3e40e57e1',
          'x-rapidapi-host': 'job-posting-feed-api.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setJobs(data.hits); // Assuming `hits` contains the job data
      } catch (error) {
        console.error(error);
      }
    };

    // fetchJobs();

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
            className="inline-block mt-6 text-white bg-orange-600 px-6 py-3 rounded-lg hover:bg-blue-700"
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
            className="inline-block mt-6 text-white bg-orange-600 px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            See More Events
          </Link>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>



        <div className="my-8">
  <h2 className="text-2xl font-bold mb-4">Latest Jobs</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {isLoadingNews
      ? Array.from({ length: 3 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))
      : jobsData.slice(0, 3).map((job, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 h-full border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{job.organization}</p>
          <p className="text-gray-500 text-sm mb-4">{job.description}</p>
          
          <div className="mt-auto">
            <Link
              to={job.link}
              className="inline-block text-blue-500 font-semibold hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Job
            </Link>
          </div>
        </div>
      ))}
  </div>

  {/* See All Jobs Link */}
  <Link
    to="/jobs"
    className="inline-block mt-6 text-white bg-orange-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
  >
    See All Jobs
  </Link>
</div>

      </div>
    </>
  );
};

export default HomePage;

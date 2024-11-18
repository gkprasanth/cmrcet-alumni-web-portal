// src/pages/EventPage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import { fetchDocuments } from "../utils/appwrite";

const EventPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await fetchDocuments(
          "6739a7360014e787cfad",
          "673ad9620001dd25a7f5"
        );
        setEventsData(events);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex-col gap-4 w-full h-[100vh] flex items-center justify-center">
        <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="animate-ping">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 my-8">
      <h2 className="text-2xl font-bold mb-4">All Events</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {eventsData.map((event, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link to={`/events/${event.id}`}>
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{event.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;

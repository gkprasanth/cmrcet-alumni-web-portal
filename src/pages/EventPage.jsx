// src/pages/EventPage.js
import React from "react";
import { eventsData } from "../utils/data"; // Import data

const EventPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 my-8">
      <h2 className="text-2xl font-bold mb-4">All Events</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {eventsData.map((event, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;

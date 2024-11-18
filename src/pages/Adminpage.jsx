// src/pages/AdminPage.js
import React, { useState } from "react";

const AdminPage = () => {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [newsInput, setNewsInput] = useState("");
  const [eventInput, setEventInput] = useState("");

  const handleAddNews = () => {
    if (newsInput.trim()) {
      setNews([...news, newsInput]);
      setNewsInput(""); 
    }
  };

  const handleAddEvent = () => {
    if (eventInput.trim()) {
      setEvents([...events, eventInput]);
      setEventInput(""); 
    }
  };

  return (
    <div className="admin-page p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* News Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add News</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter news title"
            value={newsInput}
            onChange={(e) => setNewsInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleAddNews}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
        <ul className="list-disc pl-6">
          {news.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Events Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Add Events</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter event title"
            value={eventInput}
            onChange={(e) => setEventInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleAddEvent}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
        <ul className="list-disc pl-6">
          {events.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminPage;

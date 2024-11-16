// src/pages/NewsPage.js
import React from "react";
import { newsData } from "../utils/data"; // Import data

const NewsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 my-8">
      <h2 className="text-2xl font-bold mb-4">All News</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{news.title}</h3>
              <p className="text-gray-600 mt-2">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;

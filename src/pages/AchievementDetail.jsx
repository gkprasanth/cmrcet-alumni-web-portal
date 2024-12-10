import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { slides } from "./Carousel"; // Importing the data from your carousel

const AchievementDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  // Find the achievement based on the ID
  const achievement = slides.find((slide) => slide.id === parseInt(id));

  if (!achievement) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-xl font-semibold text-gray-600">Achievement not found</p>
      </div>
    );
  }

  const { image, title, description } = achievement;

  return (
    <div className="container mx-auto p-6 mb-10 md:p-12 bg-white rounded-lg shadow-xl max-w-4xl mt-10">
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 focus:outline-none mb-6 shadow-lg transition-all duration-200 ease-in-out"
      >
        Back to Home
      </button>

      <div className="flex flex-col items-center md:flex-row md:space-x-12">
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/2 max-w-md h-96 object-cover rounded-lg shadow-lg mb-6 md:mb-0"
        />
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">{description}</p>
          <p className="text-sm text-gray-500 italic">This is one of our most celebrated achievements!</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementDetail;

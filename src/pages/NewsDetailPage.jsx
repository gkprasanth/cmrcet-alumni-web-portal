// src/pages/NewsDetailPage.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDocuments } from "../utils/appwrite"; // Ensure this function fetches data from Appwrite

const NewsDetailPage = () => {
  const { id } = useParams(); // Get the news ID from the URL
  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        // Fetch the news detail based on ID
        const news = await fetchDocuments("6739a7360014e787cfad", "6739a74200018257a9fb", );
        setNewsDetail(news[id-1]); 
        

        // Assuming `fetchDocuments` returns an array and the first item is the news
      } catch (error) {
        setError("Failed to fetch news details.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex-col gap-4 w-full h-screen flex items-center justify-center bg-gray-50">
        <div className="w-20 h-20 border-8 border-t-blue-400 border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-xl text-center">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 my-8 bg-gray-50">
      <button
        onClick={() => navigate('/news')}
        className="text-orange-500 mb-6 flex items-center transition-all duration-300 hover:text-blue-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to News
      </button>
      {newsDetail && (
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <img
            src={newsDetail.image}
            alt={newsDetail.title}
            className="w-full h-96 object-cover rounded-t-lg hover:scale-105 transition-all duration-300 ease-in-out"
          />
          <div className="p-6">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 leading-tight">{newsDetail.title}</h2>
            <p className="text-lg text-gray-700 mb-6">{newsDetail.description}</p>
            {/* <div className="flex justify-between items-center mt-6">
              <span className="text-sm text-gray-500">Published on: {newsDetail.date}</span>
              <span className="text-sm text-gray-500">By: {newsDetail.author}</span>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetailPage;

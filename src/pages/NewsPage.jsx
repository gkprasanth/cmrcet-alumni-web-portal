// src/pages/NewsPage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { fetchDocuments } from "../utils/appwrite";

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await fetchDocuments("6739a7360014e787cfad", "6739a74200018257a9fb");
        setNewsData(news);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex-col gap-4 w-full h-[100vh] absolute flex items-center justify-center">
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
      <h2 className="text-2xl font-bold mb-4">All News</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{news.title}</h3>
              {/* Description with text truncation */}
              <p className="text-gray-600 mt-2 line-clamp-2">{news.description}</p>
              {/* Link to the detailed news page */}
              <Link to={`/news/${news.id}`} className="text-blue-500 mt-4 inline-block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;

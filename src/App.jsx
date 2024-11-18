// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewsPage from "./pages/NewsPage";
import EventPage from "./pages/EventPage";
import JobPage from "./pages/JobsPage";
import Footer from "./pages/Footer";
import ProtectedRoute from "./pages/ProtectedRoute";
import NewsDetailPage from "./pages/NewsDetailPage";
import AdminPage from "./pages/Adminpage";
import ProtectedRoute1 from "./pages/ProtectedRoute1";

import { account } from "./utils/appwrite"; // Ensure this points to your Appwrite setup
import EventDetailPage from "./pages/EventDetailPage";
import ChatRoom from "./pages/ChatRoom";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
        document.cookie = "__vercel_live_token=value; path=/; SameSite=None; Secure";

    const fetchUser = async () => {
      try {
        const currentUser = await account.get(); // Get current logged-in user
        setUser(currentUser); // Set user object
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null); // Set to null if no user is logged in
      }
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/news" element={<ProtectedRoute element={<NewsPage />} />} />
        <Route path="/events" element={<ProtectedRoute element={<EventPage />} />} />

        <Route path="/events/:id" element={<ProtectedRoute element={<EventDetailPage />} />} />

        <Route path="/jobs" element={<ProtectedRoute element={<JobPage />} />} />

        <Route path="/jobs" element={<ProtectedRoute element={<JobPage />} />} />

        <Route path="/chatroom" element={<ProtectedRoute element={<ChatRoom />} />} />

        {/* Admin Route */}
        {user?.email === "admin@gmail.com" && (
          <Route path="/admin" element={<AdminPage />} />
        )}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

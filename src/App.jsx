import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewsPage from "./pages/NewsPage";
import EventPage from "./pages/EventPage";
import JobPage from "./pages/JobsPage";
import Footer from "./pages/Footer";
 

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/jobs" element={<JobPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

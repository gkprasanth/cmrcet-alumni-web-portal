import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Alumni Connect</h2>
          <p className="text-gray-300">
            Reconnect, network, and grow with your alumni community. Stay updated with the latest events, jobs, and news.
          </p>
        </div>


        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <Link to="/events" >
              <p className="hover:text-blue-400 transition">Events</p>
            </Link>
            <Link to="/jobs">
              <p className="hover:text-blue-400 transition">Jobs</p>
            </Link>
            <Link to="/news">
              <p className="hover:text-blue-400 transition">News</p>
            </Link>
           
          </ul>
        </div>


        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@alumniconnect.com" className="hover:text-blue-400 transition">
                principal@cmrcet.ac.in
              </a>
            </li>
            <li>
              <span className="font-medium">Phone:</span> +91 9248727210
            </li>
            <li>
              <span className="font-medium">Address:</span> CMR College of Engineering & Technology Kandlakoya(v), Medchal Road Hyderabad, Telangana, India - 501401,
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-800 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Alumni Connect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

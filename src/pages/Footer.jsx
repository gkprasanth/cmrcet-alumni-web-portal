import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Alumni Connect</h2>
          <p className="text-gray-300">
            Reconnect, network, and grow with your alumni community. Stay updated with the latest events, jobs, and news.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/events" className="hover:text-blue-400 transition">Events</a>
            </li>
            <li>
              <a href="/jobs" className="hover:text-blue-400 transition">Jobs</a>
            </li>
            <li>
              <a href="/news" className="hover:text-blue-400 transition">News</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@alumniconnect.com" className="hover:text-blue-400 transition">
                info@alumniconnect.com
              </a>
            </li>
            <li>
              <span className="font-medium">Phone:</span> +1 (123) 456-7890
            </li>
            <li>
              <span className="font-medium">Address:</span> 123 Alumni Lane, City, Country
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

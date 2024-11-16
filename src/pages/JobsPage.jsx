// src/pages/JobPage.js
import React from "react";
import { jobsData } from "../utils/data"; // Import data

const JobPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 my-8">
      <h2 className="text-2xl font-bold mb-4">All Jobs & Internships</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {jobsData.map((job, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600 mt-2">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPage;

import { useState } from 'react';
import { Link } from 'react-router-dom';

// Static job data (from jobsData)
export const jobsData = [
  {
    title: "Software Developer",
    company: "Google",
    description: "Looking for passionate software developers to join our internship program.",
    link: "https://www.google.com/about/careers/applications/jobs/results/138164744899961542-staff-software-engineer-infrastructure-google-cloud",
  },
  {
    title: "Marketing Intern",
    company: "Market Solutions",
    description: "We are hiring marketing interns to work on exciting campaigns.",
    link: "https://shorturl.at/lHL8l",
  },
  {
    title: "Full-time Java Developer",
    company: "WebDev Co.",
    description: "We are hiring full-time Java developers to work on cutting-edge projects.",
    link: "https://shorturl.at/2S74f",
  },
  {
    title: "Freelance Fresher",
    company: "CNR EdTech",
    description: "We are seeking dynamic and motivated individuals for the role of Hiring Freelancers Freshers. ",
    link: "https://shorturl.at/TFdfq",
  },

  {
    title: "Content Designing intern",
    company: "BrainShala",
    description: "We are seeking a Content Designing Intern to join our dynamic team. This part-time, remote internship is open to freshers with 0-1 year of experience ",
    link: "https://shorturl.at/EnuEh",
  },
  {
    title: "Bench Sales Recruiter",
    company: "Fluxtek Solutions Inc",
    description: "We are seeking a motivated Bench Sales Recruiter to join our IT staffing team. The recruiter will focus on marketing and placing bench candidates (H1B, OPT, CPT, GC, USC) to vendors and clients.",
    link: "https://shorturl.at/QeNl2",
  },

  
  {
    title: "Technical Recruiter ",
    company: "Google",
    description: "We are seeking a Technical Recruiter to join our IT staffing team. The recruiter will focus on marketing and placing bench candidates (H1B, OPT, CPT, GC, USC) to vendors and clients.",
    link: "https://shorturl.at/mkT7y",
  },
  {
    title: "Digital Marketing Intern",
    company: "IIT Academy",
    description: "As a Digital Marketing Intern, you will play a crucial role in our dynamic marketing team, gaining hands-on experience in the exciting world of digital marketing.",
    link: "https://shorturl.at/N59PI",
  },


  {
    title: "Data Entry - LinkedIn Outbound",
    company: "Frugal Testing",
    description: "",
    link: "https://tinyurl.com/ye9k45ep",
  },

];

const JobPage = () => {
  const [jobs, setJobs] = useState(jobsData);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // If you plan to implement pagination for the static data
  const [loading, setLoading] = useState(false); // Assuming no API call is needed

  // Pagination logic (if needed)
  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">All Job Listings</h1>

      {loading ? (
        <div className="text-center text-lg text-gray-600">Loading...</div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <Link key={index} to={job.link}>
                <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl h-full">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h2>
                  <p className="text-gray-600 font-medium mb-4">{job.company}</p>
                  <p className="text-sm text-gray-500 mb-6">{job.description}</p>
                  <div className="mt-auto">
                    <a
                      href={job.link}
                      className="inline-block text-blue-500 font-semibold hover:text-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Job
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 disabled:bg-gray-300 transition-colors"
            >
              Previous
            </button>
            <span className="text-lg text-gray-700">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 disabled:bg-gray-300 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPage;
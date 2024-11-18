import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const url = `https://job-posting-feed-api.p.rapidapi.com/active-ats-meili?title_search=false&description_type=html&page=${page}&hitsPerPage=10`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '74e08c8d1dmshc3c3b3d2a461171p1baf7fjsnd8f3e40e57e1',
          'x-rapidapi-host': 'job-posting-feed-api.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setJobs(data.hits); // Assuming `hits` contains the job data
        setTotalPages(Math.ceil(data.nbHits / 10)); // Calculate total pages based on number of hits
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (


    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">All Job Listings</h1>

      {loading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <Link to={job.url}  >
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <img
                    src={job.organization_logo}
                    alt={job.organization}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <p className="text-gray-600">{job.organization}</p>
                  <p className="text-sm text-gray-500">{job.locations_derived[0].addressLocality}</p>
                  <div className="mt-4">
                    <a
                      href={job.url}
                      className="inline-block text-blue-500 hover:text-blue-700 font-semibold"
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
              className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 disabled:bg-gray-300"
            >
              Previous
            </button>
            <span className="text-lg">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 disabled:bg-gray-300"
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

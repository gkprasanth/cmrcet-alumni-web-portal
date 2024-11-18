import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDocuments } from "../utils/appwrite"; // Your utility for fetching documents
import { databases } from "../utils/appwrite"; // Already imported from appwrite.js

const RegisterModal = ({ isOpen, closeModal, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError("Please fill in all fields.");
      return;
    }
    onSubmit(name, email);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Register for the Event</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input
              id="name"
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const EventDetailPage = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [eventDetail, setEventDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventDetail = async () => {
      try {
        // Fetch the event detail based on ID
        const event = await fetchDocuments("6739a7360014e787cfad", "673ad9620001dd25a7f5", id);
        setEventDetail(event[0]); // Assuming `fetchDocuments` returns an array and the first item is the event
      } catch (error) {
        setError("Failed to fetch event details.");
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetail();
  }, [id]);

  const handleRegister = async (name, email) => {
    try {
      const registrationData = {
        name,
        email,
        eventId: id, // Store the event ID to link the registration to the event
      };

      // Upload registration data to the "registrations" collection in Appwrite
      const response = await databases.createDocument(
        "6739a7360014e787cfad", // Your database ID
        "673b1166003cb24c4584", // The "registrations" collection ID
        "unique()", // Unique ID for the registration
        registrationData
      );

      alert("Registration successful!");
    } catch (error) {
      alert("Failed to register. Please try again.");
      console.error("Error registering:", error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-[100vh]">
        <div className="w-20 h-20 border-8 text-blue-500 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-lg text-center">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-10">
      <button onClick={() => navigate("/events")} className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Events
      </button>
      
      {eventDetail && (
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            src={eventDetail.image}
            alt={eventDetail.title}
            className="w-full h-96 object-cover rounded-t-lg"
          />
          <div className="p-8 space-y-6">
            <h2 className="text-4xl font-semibold text-gray-900">{eventDetail.title}</h2>
            <p className="text-lg text-gray-700">{eventDetail.description}</p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Date:</strong> {eventDetail.date}
              </p>
              <p className="text-gray-600">
                <strong>Venue:</strong> {eventDetail.venue}
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <button
                className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300"
                onClick={openModal}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      <RegisterModal isOpen={isModalOpen} closeModal={closeModal} onSubmit={handleRegister} />
    </div>
  );
};

export default EventDetailPage;

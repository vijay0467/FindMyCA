import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const { id } = useParams(); // Get the profile ID from the URL
  const navigate = useNavigate(); // Navigation hook
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Accounts/${id}`);
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile details:", err);
        setError("Failed to load profile details. Please try again later.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-4 text-lg animate-pulse">Loading profile details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 my-8">
      <div className="bg-white shadow-md rounded-lg max-w-lg  mx-auto p-6">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-2xl font-bold text-center mb-4">{profile.name}</h1>
        <p className="text-gray-600 mb-4">{profile.intro}</p>
        <p className="mb-2">
          <strong>Rating:</strong> {profile.rating} ⭐
        </p>
        <p className="mb-2">
          <strong>Price:</strong> {profile.price}
        </p>
        <p className="mb-2">
          <strong>Description:</strong> {profile.about?.description || "N/A"}
        </p>
        <p className="mb-2">
          <strong>Services:</strong> {profile.about?.services?.join(", ") || "N/A"}
        </p>
        <p className="mb-4">
          <strong>Benefits:</strong> {profile.about?.benefits?.join(", ") || "N/A"}
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            &larr; Back to Profiles
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

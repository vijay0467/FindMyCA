import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]); // To store all profiles
  const [filteredProfiles, setFilteredProfiles] = useState([]); // To store filtered profiles
  const [searchQuery, setSearchQuery] = useState(""); // To store the search input
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Accounts"); // Correct endpoint
        setProfiles(response.data);
        setFilteredProfiles(response.data); // Initialize filteredProfiles with all profiles
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profiles:", err);
        setError("Failed to load profiles. Please try again later.");
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const handleSearch = () => {
    // Filter profiles based on the search query
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  if (loading) {
    return <p className="text-center mt-4 text-lg animate-pulse">Loading profiles...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 my-8">
      <h1 className="text-center text-3xl font-bold mb-6">Chartered Accountants Profiles</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Search profile..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-500 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 overflow-hidden"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col">
                <h5 className="text-lg font-semibold mb-2">{profile.name}</h5>
                <p className="text-sm text-gray-600 mb-4">
                  {profile.intro.length > 60
                    ? `${profile.intro.slice(0, 60)}...`
                    : profile.intro}
                </p>
                <p className="text-sm mb-2">
                  <strong>Rating:</strong> {profile.rating} ⭐
                </p>
                <p className="text-sm mb-4">
                  <strong>Price:</strong> {profile.price}
                </p>
                <Link
                  to={`/details/${profile.id}`}
                  className="mt-auto text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-600">No profiles found.</p>
        )}
      </div>
    </div>
  );
};

export default Profiles;
